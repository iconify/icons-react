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
		"content": `<style>.g5o5ke2fn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 9.5za4 4 0 0 1 4 4V17a4 4 0 0 1-4 4a4 4 0 0 1-4-4v-3.5a4 4 0 0 1 4-4m0-7v7M18 7s-2 2.75-2 4.25a2 2 0 0 0 4 0C20 9.75 18 7 18 7");
}
</style><path class="g5o5ke2fn"/>`,
		"fallback": "uix:eye-drops",
	});
}

export default Component;
