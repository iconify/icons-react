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
		"content": `<style>.dbb3inbpu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.125 6.5h2.75A2.625 2.625 0 0 1 11.5 9.125v1.25A2.625 2.625 0 0 1 8.875 13h-2.75A2.625 2.625 0 0 1 3.5 10.375v-1.25A2.625 2.625 0 0 1 6.125 6.5M6 6.5V3m3 3.5V3M7.5 13v3a3 3 0 0 0 3 3h2m2.75-1.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m4 1.75L21 21");
}
</style><path class="dbb3inbpu"/>`,
		"fallback": "uix:cable-locator",
	});
}

export default Component;
