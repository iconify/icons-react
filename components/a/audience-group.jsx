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
		"content": `<style>.jmd0irbus {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 7a3 3 0 1 0 6 0a3 3 0 1 0-6 0M5.5 20c0-4 3-6.5 6.5-6.5s6.5 2.5 6.5 6.5M2.5 9a2 2 0 1 0 4 0a2 2 0 1 0-4 0m15 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-15 8.5c0-2.25.75-3.75 2.25-3.75M21.5 17.5c0-2.25-.75-3.75-2.25-3.75");
}
</style><path class="jmd0irbus"/>`,
		"fallback": "uix:audience-group",
	});
}

export default Component;
