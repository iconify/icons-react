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
		"content": `<style>.f7jsygpkb {
  d: path("M10 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-.052 5.638a6 6 0 0 1-3.586-7.69m7.69-3.586a6 6 0 0 1 3.586 7.69");
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
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="f7jsygpkb"/></g>`,
		"fallback": "uix:golden-record",
	});
}

export default Component;
