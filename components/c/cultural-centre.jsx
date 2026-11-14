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
		"content": `<style>.r7f2d1jpq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 9l9-5.5L21 9Zm0 9h18v3H3Zm9-11.25h.01m-6.01 5V18m4-6.25V18m4-6.25V18m4-6.25V18");
}
</style><path class="r7f2d1jpq"/>`,
		"fallback": "uix-sharp:cultural-centre",
	});
}

export default Component;
