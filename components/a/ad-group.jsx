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
		"content": `<style>.p_epq6rny {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 9.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0M5 21c0-3.25 3-5.5 7-5.5s7 2.25 7 5.5M3 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m14 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M2.5 13.5c0-2.25 1.25-3.75 3.25-3.75M21.5 13.5c0-2.25-1.25-3.75-3.25-3.75");
}
</style><path class="p_epq6rny"/>`,
		"fallback": "uix:ad-group",
	});
}

export default Component;
