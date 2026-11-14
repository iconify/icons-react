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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qty2dywgu {
  d: path("M7.5 10a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0m4.5 0l1.5-1.5");
}

.z539tbcdd {
  d: path("M8.375 2.5h7.25A4.375 4.375 0 0 1 20 6.875v6.25a4.375 4.375 0 0 1-4.375 4.375h-7.25A4.375 4.375 0 0 1 4 13.125v-6.25A4.375 4.375 0 0 1 8.375 2.5M9 17.5v4m6-4v4");
}
</style><g class="hntgybcog"><path class="z539tbcdd"/><path class="qty2dywgu"/></g>`,
		"fallback": "uix:energy-meter",
	});
}

export default Component;
