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
		"content": `<style>.fl9u_jbto {
  d: path("M7.75 6.75a1.75 4 0 1 0 3.5 0a1.75 4 0 1 0-3.5 0m5 0a1.75 4 0 1 0 3.5 0a1.75 4 0 1 0-3.5 0M10 14.5h.01m3.99 0h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i5gy7caza {
  d: path("M6.5 15a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0");
}
</style><g class="hntgybcog"><path class="i5gy7caza"/><path class="fl9u_jbto"/></g>`,
		"fallback": "uix:cruelty-free",
	});
}

export default Component;
