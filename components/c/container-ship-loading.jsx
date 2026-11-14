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
		"content": `<style>.q2ydfachs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 16h18l-2.5 4.5h-13Zm3.5-5h1A1.5 1.5 0 0 1 9 12.5v2A1.5 1.5 0 0 1 7.5 16h-1A1.5 1.5 0 0 1 5 14.5v-2A1.5 1.5 0 0 1 6.5 11m5 0h1a1.5 1.5 0 0 1 1.5 1.5v2a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-2a1.5 1.5 0 0 1 1.5-1.5M17 3.5V9m-2.5-2.5L17 9l2.5-2.5");
}
</style><path class="q2ydfachs"/>`,
		"fallback": "uix:container-ship-loading",
	});
}

export default Component;
