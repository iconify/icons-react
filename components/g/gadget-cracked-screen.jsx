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

.y6i3hfbkv {
  d: path("M10.875 2.5h2.25A4.375 4.375 0 0 1 17.5 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375h-2.25A4.375 4.375 0 0 1 6.5 17.125V6.875A4.375 4.375 0 0 1 10.875 2.5");
}

.yoql2bbwg {
  d: path("m13.5 3l-2 5.5L14 12l-3.5 5.5");
}
</style><g class="hntgybcog"><path class="y6i3hfbkv"/><path class="yoql2bbwg"/></g>`,
		"fallback": "uix:gadget-cracked-screen",
	});
}

export default Component;
