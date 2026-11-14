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
		"content": `<style>.b1giyo3pl {
  d: path("M6.875 2.5h10.25A4.375 4.375 0 0 1 21.5 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 17.125V6.875A4.375 4.375 0 0 1 6.875 2.5");
}

.g0b8ox_pu {
  fill: currentColor;
  d: path("M7.25 2.5H12v4.75H7.25Zm9.5 0H19A2.5 2.5 0 0 1 21.5 5v2.25h-4.75ZM2.5 7.25h4.75V12H2.5Zm9.5 0h4.75V12H12ZM7.25 12H12v4.75H7.25Zm9.5 0h4.75v4.75h-4.75ZM2.5 16.75h4.75v4.75H5A2.5 2.5 0 0 1 2.5 19Zm9.5 0h4.75v4.75H12Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="b1giyo3pl"/><path class="g0b8ox_pu"/></g>`,
		"fallback": "uix:checker",
	});
}

export default Component;
