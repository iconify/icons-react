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
		"content": `<style>.nb1jz7b2r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 6.5h7.5a1.75 1.75 0 0 1 1.75 1.75v7.5a1.75 1.75 0 0 1-1.75 1.75h-7.5a1.75 1.75 0 0 1-1.75-1.75v-7.5A1.75 1.75 0 0 1 4.25 6.5m13.5 5.5h2a1.75 1.75 0 0 1 1.75 1.75v2a1.75 1.75 0 0 1-1.75 1.75h-2A1.75 1.75 0 0 1 16 15.75v-2A1.75 1.75 0 0 1 17.75 12M6.5 9.25h.01m2.99 0h.01M5.25 12h.01M8 12h.01m2.74 0h.01M6.5 14.75h.01m2.99 0h.01m9.24 0h.01");
}
</style><path class="nb1jz7b2r"/>`,
		"fallback": "uix:concentration",
	});
}

export default Component;
