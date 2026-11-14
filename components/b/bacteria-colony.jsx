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

.xf13lz5bn {
  d: path("M9.606 18.578a7 7 0 0 1-3.95-3.62M9 11.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0m6.75-1h.01m-.76 5h.01m-5.01 1h.01");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="xf13lz5bn"/></g>`,
		"fallback": "uix:bacteria-colony",
	});
}

export default Component;
