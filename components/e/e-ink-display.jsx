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

.i6az7hbbj {
  d: path("M9 5.25h6A1.75 1.75 0 0 1 16.75 7v8A1.75 1.75 0 0 1 15 16.75H9A1.75 1.75 0 0 1 7.25 15V7A1.75 1.75 0 0 1 9 5.25M10 8h4m-4 3h4m-4 3h2.75");
}

.o72zbacef {
  d: path("M8.875 2.5h6.25A4.375 4.375 0 0 1 19.5 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375h-6.25A4.375 4.375 0 0 1 4.5 17.125V6.875A4.375 4.375 0 0 1 8.875 2.5");
}
</style><g class="hntgybcog"><path class="o72zbacef"/><path class="i6az7hbbj"/></g>`,
		"fallback": "uix:e-ink-display",
	});
}

export default Component;
