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

.nfy8ljxaa {
  d: path("M6 7h12a3.5 3.5 0 0 1 3.5 3.5V17a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 17v-6.5A3.5 3.5 0 0 1 6 7m2.5 0V5A1.5 1.5 0 0 1 10 3.5h4A1.5 1.5 0 0 1 15.5 5v2m-13 5.5H10m4 0h7.5");
}

.vratbxf_s {
  d: path("M11.5 11h1a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5");
}
</style><g class="hntgybcog"><path class="nfy8ljxaa"/><path class="vratbxf_s"/></g>`,
		"fallback": "uix:briefcase-classic",
	});
}

export default Component;
