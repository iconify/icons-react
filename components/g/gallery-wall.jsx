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
		"content": `<style>.difys5bdr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 3.5h7A1.5 1.5 0 0 1 12.5 5v4.5A1.5 1.5 0 0 1 11 11H4a1.5 1.5 0 0 1-1.5-1.5V5A1.5 1.5 0 0 1 4 3.5M17 6h3a1.5 1.5 0 0 1 1.5 1.5v6A1.5 1.5 0 0 1 20 15h-3a1.5 1.5 0 0 1-1.5-1.5v-6A1.5 1.5 0 0 1 17 6m-9.5 8H11a1.5 1.5 0 0 1 1.5 1.5V19a1.5 1.5 0 0 1-1.5 1.5H7.5A1.5 1.5 0 0 1 6 19v-3.5A1.5 1.5 0 0 1 7.5 14");
}
</style><path class="difys5bdr"/>`,
		"fallback": "uix:gallery-wall",
	});
}

export default Component;
