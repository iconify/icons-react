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
		"content": `<style>.cue9yz83s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 4h2.5A1.75 1.75 0 0 1 8.5 5.75v14a1.75 1.75 0 0 1-1.75 1.75h-2.5a1.75 1.75 0 0 1-1.75-1.75v-14A1.75 1.75 0 0 1 4.25 4m13 0h2.5a1.75 1.75 0 0 1 1.75 1.75v14a1.75 1.75 0 0 1-1.75 1.75h-2.5a1.75 1.75 0 0 1-1.75-1.75v-14A1.75 1.75 0 0 1 17.25 4M8.5 11.5h4.25M18.5 8h.01");
}
</style><path class="cue9yz83s"/>`,
		"fallback": "uix:fare-gate",
	});
}

export default Component;
