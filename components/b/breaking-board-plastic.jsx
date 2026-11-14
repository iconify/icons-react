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
		"content": `<style>.h1m995bfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 7.5h5.888a1.75 1.75 0 0 1 1.674 2.26l-2.434 8A1.75 1.75 0 0 1 7.703 19H4.25a1.75 1.75 0 0 1-1.75-1.75v-8A1.75 1.75 0 0 1 4.25 7.5M17.797 5h1.953a1.75 1.75 0 0 1 1.75 1.75v8a1.75 1.75 0 0 1-1.75 1.75h-4.388a1.75 1.75 0 0 1-1.674-2.26l2.434-8A1.75 1.75 0 0 1 17.797 5");
}
</style><path class="h1m995bfx"/>`,
		"fallback": "uix:breaking-board-plastic",
	});
}

export default Component;
