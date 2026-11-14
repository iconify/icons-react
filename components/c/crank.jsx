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
		"content": `<style>.tyuyz8m2s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 14.25a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0m6.5 0l8.5-7.5m-.5-1.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-8 9h.01");
}
</style><path class="tyuyz8m2s"/>`,
		"fallback": "uix:crank",
	});
}

export default Component;
