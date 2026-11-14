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

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}

.trp8zll9g {
  d: path("M9 11.75s-2-1.25-2-2.5c0-.5.5-1 1-1s.75.25 1 .5c.25-.25.5-.5 1-.5s1 .5 1 1c0 1.25-2 2.5-2 2.5m6 0s-2-1.25-2-2.5c0-.5.5-1 1-1s.75.25 1 .5c.25-.25.5-.5 1-.5s1 .5 1 1c0 1.25-2 2.5-2 2.5M8.5 15c1 1.5 2.1 2.25 3.5 2.25s2.5-.75 3.5-2.25");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="trp8zll9g"/></g>`,
		"fallback": "uix:emoji-love",
	});
}

export default Component;
