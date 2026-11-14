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
		"content": `<style>.wbv9rfbrd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 9c.9 0 1.5.9 1.5 1.75v2.75l7 3.5v1.75l-7-2V19l1.75 1.25v1.25L12 20.75l-3.25.75v-1.25L10.5 19v-2.25l-7 2V17l7-3.5v-2.75C10.5 9.9 11.1 9 12 9m0-6h.01M12 6h.01");
}
</style><path class="wbv9rfbrd"/>`,
		"fallback": "uix:autopilot",
	});
}

export default Component;
