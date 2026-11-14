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
		"content": `<style>.x8x0ihccm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 3v8l2 3l2-3V3m-5 0h6m-5 5h4m-2 6v7m7-18v8l2 3l2-3V3m-5 0h6m-5 5h4m-2 6v7");
}
</style><path class="x8x0ihccm"/>`,
		"fallback": "uix-sharp:crutches",
	});
}

export default Component;
