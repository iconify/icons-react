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
		"content": `<style>.bntd8j1ej {
  d: path("M9.5 14h5q0 2.5-2.5 2.5T9.5 14");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hrvllfc7h {
  d: path("M7 12L3.5 7L8 8L6.5 2.5l4 4h3l4-4L16 8l4.5-1l-3.5 5v2q0 5-5 5t-5-5Zm-2 9.75h14M10 11h.01M14 11h.01");
}
</style><g class="hntgybcog"><path class="hrvllfc7h"/><path class="bntd8j1ej"/></g>`,
		"fallback": "uix:gargoyle",
	});
}

export default Component;
