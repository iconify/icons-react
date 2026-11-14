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

.vi6u26yqj {
  d: path("M8 12a4 4 0 1 0 8 0a4 4 0 1 0-8 0m4-9.5v2.75m0 13.5v2.75m2.25-12.75l1.5-2m-6 8.5l-1.5 2");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="vi6u26yqj"/></g>`,
		"fallback": "uix:cipher-wheel",
	});
}

export default Component;
