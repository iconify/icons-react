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
		"content": `<style>.vdv04ccox {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 3h1.5A1.75 1.75 0 0 1 8.5 4.75v5.5A1.75 1.75 0 0 1 6.75 12h-1.5a1.75 1.75 0 0 1-1.75-1.75v-5.5A1.75 1.75 0 0 1 5.25 3M3.5 12h16c0 3.5-2 5.5-5 6v3.5h-6v-3.75c-3-.75-5-2.75-5-5.75m5-2.5h11M5 6h2");
}
</style><path class="vdv04ccox"/>`,
		"fallback": "uix:half-bath",
	});
}

export default Component;
