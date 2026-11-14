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
		"content": `<style>.d_86l4l2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 2.5v2m-.5 0h1A1.5 1.5 0 0 1 9 6v1a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 5 7V6a1.5 1.5 0 0 1 1.5-1.5m.5 4zA2.5 2.5 0 0 1 9.5 11v2A2.5 2.5 0 0 1 7 15.5A2.5 2.5 0 0 1 4.5 13v-2A2.5 2.5 0 0 1 7 8.5m0 7v6m10-19v2m-.5 0h1A1.5 1.5 0 0 1 19 6v1a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 15 7V6a1.5 1.5 0 0 1 1.5-1.5m.5 4za2.5 2.5 0 0 1 2.5 2.5v2a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5v-2A2.5 2.5 0 0 1 17 8.5m0 7v6");
}
</style><path class="d_86l4l2k"/>`,
		"fallback": "uix:cable-rca",
	});
}

export default Component;
