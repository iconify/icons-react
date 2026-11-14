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
		"content": `<style>.m94v3hb-z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 14.5h2A1.5 1.5 0 0 1 8 16v2a1.5 1.5 0 0 1-1.5 1.5h-2A1.5 1.5 0 0 1 3 18v-2a1.5 1.5 0 0 1 1.5-1.5M8 17c5 0 7-11.5 13-12.5m-15.5 10v-5m-2-2a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><path class="m94v3hb-z"/>`,
		"fallback": "uix:anchor-point-convert",
	});
}

export default Component;
