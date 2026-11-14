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

.lu0skq29h {
  d: path("M8.75 7.25a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m5.5.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m-1 5.75a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="lu0skq29h"/></g>`,
		"fallback": "uix:bowling-ball",
	});
}

export default Component;
