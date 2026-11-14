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
		"content": `<style>.e5ragzjjw {
  d: path("M7 9.25L9.5 12L7 14.75");
}

.eh3gfms5p {
  d: path("M7 2.5c8 3 8 16 0 19m0-19L3 12l4 9.5M3 12h18.5M18 8.5l3.5 3.5l-3.5 3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="eh3gfms5p"/><path class="e5ragzjjw"/></g>`,
		"fallback": "uix:bow-arrow",
	});
}

export default Component;
