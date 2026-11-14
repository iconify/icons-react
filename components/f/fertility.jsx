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
		"content": `<style>.ab2w8bbye {
  d: path("M11.5 14.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0M5.75 6a2.25 1.5 0 1 0 4.5 0a2.25 1.5 0 1 0-4.5 0m.75-1.5C5.25 4.5 5.25 3 4 3q-1.125 0-1.5-.75");
}

.h3-oybb-c {
  d: path("M7.5 14.5a7 7 0 1 0 14 0a7 7 0 1 0-14 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="h3-oybb-c"/><path class="ab2w8bbye"/></g>`,
		"fallback": "uix:fertility",
	});
}

export default Component;
