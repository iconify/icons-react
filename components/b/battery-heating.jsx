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
		"content": `<style>.lr68auzbo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 11h9a3.5 3.5 0 0 1 3.5 3.5v2a3.5 3.5 0 0 1-3.5 3.5h-9A3.5 3.5 0 0 1 3 16.5v-2A3.5 3.5 0 0 1 6.5 11M19 13.75h1.5v3.5H19M7 8Q6 6.875 7 5.75T7 3.5M11 8q-1-1.125 0-2.25t0-2.25M15 8q-1-1.125 0-2.25t0-2.25");
}
</style><path class="lr68auzbo"/>`,
		"fallback": "uix:battery-heating",
	});
}

export default Component;
