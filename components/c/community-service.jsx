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
		"content": `<style>.gf0u97bud {
  d: path("M13.601 21H3.5V10L12 3.5l8.5 6.5v2.999M9.5 21v-5.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ps43subya {
  d: path("m18 21.5l-3-3a2.25 2.25 0 0 1 3-2.75a2.25 2.25 0 0 1 3 2.75Z");
}
</style><g class="hntgybcog"><path class="gf0u97bud"/><path class="ps43subya"/></g>`,
		"fallback": "uix:community-service",
	});
}

export default Component;
