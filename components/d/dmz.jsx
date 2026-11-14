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
		"content": `<style>.cw10vvu1s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 3zA1.75 1.75 0 0 1 6 4.75v14.5A1.75 1.75 0 0 1 4.25 21a1.75 1.75 0 0 1-1.75-1.75V4.75A1.75 1.75 0 0 1 4.25 3m15.5 0za1.75 1.75 0 0 1 1.75 1.75v14.5A1.75 1.75 0 0 1 19.75 21A1.75 1.75 0 0 1 18 19.25V4.75A1.75 1.75 0 0 1 19.75 3M10.5 8.75h3a1.75 1.75 0 0 1 1.75 1.75v3a1.75 1.75 0 0 1-1.75 1.75h-3a1.75 1.75 0 0 1-1.75-1.75v-3a1.75 1.75 0 0 1 1.75-1.75");
}
</style><path class="cw10vvu1s"/>`,
		"fallback": "uix:dmz",
	});
}

export default Component;
