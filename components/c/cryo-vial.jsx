import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.nmk8d6_xg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 2.5h8v4H5Zm1 4V18q0 .147.014.294t.044.291q.028.145.071.286t.099.277q.057.136.126.266q.07.13.152.253q.081.122.175.236t.198.218t.218.198t.236.175q.123.082.253.152t.266.126t.277.099t.286.071t.291.044T9 21q.209 0 .415-.029q.207-.029.408-.086t.391-.142q.191-.084.369-.194q.177-.111.337-.244q.161-.134.301-.288q.14-.155.258-.327t.21-.36M12 16.084V6.5M6 11h6m5.5 4v6M15 16.5l5 3m-5 0l5-3");
}
</style><path class="nmk8d6_xg"/>`,
		"fallback": "uix-sharp:cryo-vial",
	});
}

export default Component;
