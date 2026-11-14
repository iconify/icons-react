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
		"content": `<style>.xfwmstbgi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M20 2.5h-9.5a3 3 0 0 0-3 3V6M20 6h-7.5M6.75 6h6.5A1.75 1.75 0 0 1 15 7.75v1.5A1.75 1.75 0 0 1 13.25 11h-6.5A1.75 1.75 0 0 1 5 9.25v-1.5A1.75 1.75 0 0 1 6.75 6m1.5 5h3.5a1.75 1.75 0 0 1 1.75 1.75v1a1.75 1.75 0 0 1-1.75 1.75h-3.5a1.75 1.75 0 0 1-1.75-1.75v-1A1.75 1.75 0 0 1 8.25 11m-.5 4.5v6m4.5-6v6");
}
</style><path class="xfwmstbgi"/>`,
		"fallback": "uix:hose-connector",
	});
}

export default Component;
