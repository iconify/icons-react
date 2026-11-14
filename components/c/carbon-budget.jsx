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

.iywm0tbau {
  d: path("M13.5 13.5v8a8 8 0 0 0 8-8Z");
}

.uw0qvqr_x {
  d: path("M10.5 10.5h8a8 8 0 1 0-8 8Z");
}
</style><g class="hntgybcog"><path class="uw0qvqr_x"/><path class="iywm0tbau"/></g>`,
		"fallback": "uix:carbon-budget",
	});
}

export default Component;
