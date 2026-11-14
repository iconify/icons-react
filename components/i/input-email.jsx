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
		"content": `<style>.f7uah9_3n {
  d: path("M10 10.5v2.25c0 .85.6 1.25 1.25 1.25c.75 0 1.25-1 1.25-2a4 4 0 1 0-1.5 3m4.5-3h3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.u0vdgsbts {
  d: path("M7 12a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}

.yrzr6jb5x {
  d: path("M6.875 6h10.25a4.375 4.375 0 0 1 4.375 4.375v3.25A4.375 4.375 0 0 1 17.125 18H6.875A4.375 4.375 0 0 1 2.5 13.625v-3.25A4.375 4.375 0 0 1 6.875 6");
}
</style><g class="hntgybcog"><path class="yrzr6jb5x"/><path class="u0vdgsbts"/><path class="f7uah9_3n"/></g>`,
		"fallback": "uix:input-email",
	});
}

export default Component;
