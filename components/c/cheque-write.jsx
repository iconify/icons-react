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
		"content": `<style>.cwn1zxb9h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.2 18.5H2.5v-13h19v9.7M6 9.5h5.5m-5.5 5h3.5m8.5.5v6m-3-3h6");
}
</style><path class="cwn1zxb9h"/>`,
		"fallback": "uix-sharp:cheque-write",
	});
}

export default Component;
