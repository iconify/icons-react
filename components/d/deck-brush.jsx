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
		"content": `<style>.x3yc4lj6s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.75 12.5h9a1.75 1.75 0 0 1 1.75 1.75v1A1.75 1.75 0 0 1 19.75 17h-9A1.75 1.75 0 0 1 9 15.25v-1a1.75 1.75 0 0 1 1.75-1.75m4.5 0L3.5 3.5M11.25 17v3.5m4-3.5v3.5m4-3.5v3.5");
}
</style><path class="x3yc4lj6s"/>`,
		"fallback": "uix:deck-brush",
	});
}

export default Component;
