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

.rxz1jsbai {
  d: path("M10.25 6.75h3.5V8.5l1.5 2v6.75h-6.5V10.5l1.5-2Z");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="rxz1jsbai"/></g>`,
		"fallback": "uix:allergen-milk",
	});
}

export default Component;
