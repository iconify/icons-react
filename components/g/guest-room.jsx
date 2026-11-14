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
		"content": `<style>.uslh5bfyz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 5.5v15M3 17h8.3M3 12.5h12.1M7 9.5h2a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 9 12.5H7A1.5 1.5 0 0 1 5.5 11A1.5 1.5 0 0 1 7 9.5m8.75 6.5h4.5A1.75 1.75 0 0 1 22 17.75v2a1.75 1.75 0 0 1-1.75 1.75h-4.5A1.75 1.75 0 0 1 14 19.75v-2A1.75 1.75 0 0 1 15.75 16m1 0v-1.25h2.5V16");
}
</style><path class="uslh5bfyz"/>`,
		"fallback": "uix:guest-room",
	});
}

export default Component;
