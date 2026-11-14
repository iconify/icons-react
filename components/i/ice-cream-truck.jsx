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

.rqztszfbu {
  d: path("M4.5 20a2 2 0 1 0 4 0a2 2 0 1 0-4 0m11 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M9 10L5.5 6h7ZM5.5 6a3.5 3.5 0 0 1 7 0m-6.125 6.75h3.75a1.375 1.375 0 0 1 1.375 1.375a1.375 1.375 0 0 1-1.375 1.375h-3.75A1.375 1.375 0 0 1 5 14.125a1.375 1.375 0 0 1 1.375-1.375");
}

.zx9538bop {
  d: path("M2.5 18v-6.5A1.5 1.5 0 0 1 4 10h10a1.5 1.5 0 0 1 1.5 1.5V13h3l3 3v2Z");
}
</style><g class="hntgybcog"><path class="zx9538bop"/><path class="rqztszfbu"/></g>`,
		"fallback": "uix:ice-cream-truck",
	});
}

export default Component;
