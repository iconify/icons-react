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
		"content": `<style>.ea6f_dnyo {
  fill: currentColor;
  d: path("M10.125 7.25h3.75a.625.625 0 0 1 .625.625a.625.625 0 0 1-.625.625h-3.75a.625.625 0 0 1-.625-.625a.625.625 0 0 1 .625-.625m0 4h3.75a.625.625 0 0 1 .625.625a.625.625 0 0 1-.625.625h-3.75a.625.625 0 0 1-.625-.625a.625.625 0 0 1 .625-.625");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tdo0-wb3y {
  d: path("M2.5 5A2.5 2.5 0 0 1 5 2.5h14A2.5 2.5 0 0 1 21.5 5v10a2.5 2.5 0 0 1-2.5 2.5h-8L6.5 21v-3.5H5A2.5 2.5 0 0 1 2.5 15Z");
}
</style><g class="hntgybcog"><path class="tdo0-wb3y"/><path class="ea6f_dnyo"/></g>`,
		"fallback": "uix:hr-mediation",
	});
}

export default Component;
