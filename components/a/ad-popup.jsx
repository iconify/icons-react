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
		"content": `<style>.mvrg3kbid {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.2 14.5H2.5V3h15v7.2M6 7h7m0 6h8.5v8H13Z");
}
</style><path class="mvrg3kbid"/>`,
		"fallback": "uix-sharp:ad-popup",
	});
}

export default Component;
