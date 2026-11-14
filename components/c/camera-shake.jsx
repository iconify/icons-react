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

.nqz3hloda {
  d: path("M9.5 12.75a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M3 9.5V16m18-6.5V16");
}

.u_cghjx9m {
  d: path("M9.5 7.5h5A3.5 3.5 0 0 1 18 11v3.5a3.5 3.5 0 0 1-3.5 3.5h-5A3.5 3.5 0 0 1 6 14.5V11a3.5 3.5 0 0 1 3.5-3.5m0 0l1-2h3l1 2");
}
</style><g class="hntgybcog"><path class="u_cghjx9m"/><path class="nqz3hloda"/></g>`,
		"fallback": "uix:camera-shake",
	});
}

export default Component;
