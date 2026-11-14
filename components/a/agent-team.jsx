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
		"content": `<style>.gtezfhmjr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 7.25a3 3 0 1 0 6 0a3 3 0 1 0-6 0M6 21c0-4.25 2.75-7 6-7s6 2.75 6 7M2.5 8.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m15.5 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m-15.5 10c0-3.5.75-5.25 2.5-5.25m16.5 5.25c0-3.5-.75-5.25-2.5-5.25");
}
</style><path class="gtezfhmjr"/>`,
		"fallback": "uix:agent-team",
	});
}

export default Component;
