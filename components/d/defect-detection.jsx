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

.odw79ybsn {
  d: path("M15.525 19.475L15 20H2.5V8l5-5H20v9.829");
}

.u15x8uaox {
  d: path("M2.5 8H15v12m0-12l5-5m-2 11.75v3.5M18 21h.01");
}
</style><g class="hntgybcog"><path class="odw79ybsn"/><path class="u15x8uaox"/></g>`,
		"fallback": "uix:defect-detection",
	});
}

export default Component;
