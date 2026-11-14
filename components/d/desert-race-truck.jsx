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
		"content": `<style>.y4l5-ub0r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 13.5v-3h7v-4h6l3 4h2a1 1 0 0 1 1 1v2ZM10 3.75h5m-11 15a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m11 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}
</style><path class="y4l5-ub0r"/>`,
		"fallback": "uix:desert-race-truck",
	});
}

export default Component;
