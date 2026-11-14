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
		"content": `<style>.mhymttyqr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 9.5V7A2.5 2.5 0 1 0 7 9.5h10A2.5 2.5 0 1 0 14.5 7v10a2.5 2.5 0 1 0 2.5-2.5H7A2.5 2.5 0 1 0 9.5 17Z");
}
</style><path class="mhymttyqr"/>`,
		"fallback": "uix:command-menu",
	});
}

export default Component;
