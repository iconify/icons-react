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

.ndppm49us {
  d: path("M10.375 9h3.25A4.375 4.375 0 0 1 18 13.375v3.25A4.375 4.375 0 0 1 13.625 21h-3.25A4.375 4.375 0 0 1 6 16.625v-3.25A4.375 4.375 0 0 1 10.375 9M9.5 3.5V9m5-5.5V9");
}

.v9n__jb8e {
  d: path("m12.75 11.5l-2 3.5h2.5l-2 3.5");
}
</style><g class="hntgybcog"><path class="ndppm49us"/><path class="v9n__jb8e"/></g>`,
		"fallback": "uix:charger-fast",
	});
}

export default Component;
