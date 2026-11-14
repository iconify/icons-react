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
		"content": `<style>.fnsr3fb6d {
  d: path("m9.474 8.158l2.052.684a1.5 1.5 0 0 0 .948 0l2.052-.684A1.5 1.5 0 0 1 16.5 9.581v4.838a1.5 1.5 0 0 1-1.026 1.423l-3 1a1.5 1.5 0 0 1-.948 0l-3-1A1.5 1.5 0 0 1 7.5 14.419V9.581a1.5 1.5 0 0 1 1.974-1.423M12 9v8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o72zbacef {
  d: path("M8.875 2.5h6.25A4.375 4.375 0 0 1 19.5 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375h-6.25A4.375 4.375 0 0 1 4.5 17.125V6.875A4.375 4.375 0 0 1 8.875 2.5");
}
</style><g class="hntgybcog"><path class="o72zbacef"/><path class="fnsr3fb6d"/></g>`,
		"fallback": "uix:digital-compendium",
	});
}

export default Component;
