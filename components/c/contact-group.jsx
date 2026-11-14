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

.ld3wdsa9o {
  d: path("M6.75 9.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m7 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m-8 6.25c0-1.6 1.25-2.75 2.75-2.75s2.75 1.15 2.75 2.75m1.5 0c0-1.6 1.25-2.75 2.75-2.75s2.75 1.15 2.75 2.75");
}

.yssyf8lqd {
  d: path("M6.875 4.5h10.25A4.375 4.375 0 0 1 21.5 8.875v6.25a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 15.125v-6.25A4.375 4.375 0 0 1 6.875 4.5");
}
</style><g class="hntgybcog"><path class="yssyf8lqd"/><path class="ld3wdsa9o"/></g>`,
		"fallback": "uix:contact-group",
	});
}

export default Component;
