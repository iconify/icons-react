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

.wi7fczhbq {
  d: path("M8.5 11.5L12 8l3.5 3.5m-7 4.5l3.5-3.5l3.5 3.5");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="wi7fczhbq"/></g>`,
		"fallback": "uix:chevrons-up-circle",
	});
}

export default Component;
