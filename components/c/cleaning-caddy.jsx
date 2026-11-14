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
		"content": `<style>.c8pkn7mub {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.625 12h12.75A2.625 2.625 0 0 1 21 14.625v3.25a2.625 2.625 0 0 1-2.625 2.625H5.625A2.625 2.625 0 0 1 3 17.875v-3.25A2.625 2.625 0 0 1 5.625 12M10 12V6.5A1.5 1.5 0 0 1 11.5 5h1A1.5 1.5 0 0 1 14 6.5V12M4 12V8.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1V12");
}
</style><path class="c8pkn7mub"/>`,
		"fallback": "uix:cleaning-caddy",
	});
}

export default Component;
