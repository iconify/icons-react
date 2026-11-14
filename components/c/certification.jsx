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
		"content": `<style>.fyrlk0i8z {
  d: path("M5.5 9a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.untmlqxym {
  d: path("m8.75 14.75l-2 6.75l2-1l1.75 1v-6.25m4.75-.5l2 6.75l-2-1l-1.75 1v-6.25M9 9a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}
</style><g class="hntgybcog"><path class="fyrlk0i8z"/><path class="untmlqxym"/></g>`,
		"fallback": "uix:certification",
	});
}

export default Component;
