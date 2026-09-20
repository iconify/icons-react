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
		"content": `<style>.e_z28zb4o {
  d: path("m20 7 -5 5 5 5");
}

.h_ozghejt {
  d: path("m4 7 5 5 -5 5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="h_ozghejt"/><path class="e_z28zb4o"/></g>`,
		"fallback": "iconmind:chevrons-right-left-outline-thin",
	});
}

export default Component;
