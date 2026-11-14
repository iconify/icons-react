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

.tjku_n3ov {
  d: path("M4.75 6c4.75 2 9.75 2 14.5 0m-16 9.5l5.25-5L12 14l2.75-2.5l6 4");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="tjku_n3ov"/></g>`,
		"fallback": "uix:earth-science",
	});
}

export default Component;
