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
		"content": `<style>.sx8exdbay {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 11h18M7.5 11a4.5 4.5 0 0 1 9 0M4 15q3-1.875 6 0t6 0c1.25-.75 2.75-1 4-.5M6 19q3-1.875 6 0t6 0");
}
</style><path class="sx8exdbay"/>`,
		"fallback": "uix:calm-waves",
	});
}

export default Component;
