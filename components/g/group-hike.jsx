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
		"content": `<style>.m608g8b0e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 4.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m0 16.25l1.75-5.5L7.25 21M5.5 15.5v-6m0 .5H3v3.5h2.5m5.25-8.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m0 16.25l1.75-5.5l1.75 5.5m-1.75-5.5v-6m0 .5H10v3.5h2.5m5.25-8.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m0 16.25l1.75-5.5l1.75 5.5m-1.75-5.5v-6m0 .5H17v3.5h2.5");
}
</style><path class="m608g8b0e"/>`,
		"fallback": "uix:group-hike",
	});
}

export default Component;
