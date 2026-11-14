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
		"content": `<style>.n18m6nbnx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 3.5h8.25A2.625 2.625 0 0 1 16 6.125v6.25A2.625 2.625 0 0 1 13.375 15h-8.25A2.625 2.625 0 0 1 2.5 12.375v-6.25A2.625 2.625 0 0 1 5.125 3.5M4 17.75l-1.5 1.5l1.5 1.5m-1.5-1.5H16m-1.5-1.5l1.5 1.5l-1.5 1.5M18.75 5l1.5-1.5l1.5 1.5m-1.5-1.5V15m-1.5-1.5l1.5 1.5l1.5-1.5");
}
</style><path class="n18m6nbnx"/>`,
		"fallback": "uix:area-rectangle",
	});
}

export default Component;
