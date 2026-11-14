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
		"content": `<style>.fmvknzyav {
  d: path("M11.5 11.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m23w8qtbn {
  d: path("m7 21l-1-4c-3-2-3.5-6-1.5-7.5c1.5-1 3 0 3.5 1.5c0-5 2-8.5 6-8.5c4.5 0 7 4 7 9c0 4.5-2.5 7.5-5 9.5Z");
}
</style><g class="hntgybcog"><path class="m23w8qtbn"/><path class="fmvknzyav"/></g>`,
		"fallback": "uix:catcher-mitt",
	});
}

export default Component;
