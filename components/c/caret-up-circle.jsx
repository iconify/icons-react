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
		"content": `<style>.bf6gh-b4d {
  d: path("m13.161 10.169l1.335 1.631a1.5 1.5 0 0 1-1.161 2.45h-2.67a1.5 1.5 0 0 1-1.161-2.45l1.335-1.631a1.5 1.5 0 0 1 2.322 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="bf6gh-b4d"/></g>`,
		"fallback": "uix:caret-up-circle",
	});
}

export default Component;
