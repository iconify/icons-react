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
		"content": `<style>.g3x0f42ij {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 20.5h6L14 14h-4ZM6 13c-2.5 0-3-3.5-.5-4.5c0-3 3.5-4 5-2C12 4 16 5 16 7.5c3-.5 4.5 3 2 4.5c-.5 2-4 2-6 1.5c-2 .5-5 .5-6-.5");
}
</style><path class="g3x0f42ij"/>`,
		"fallback": "uix:broccoli",
	});
}

export default Component;
