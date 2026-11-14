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
		"content": `<style>.a7bo6jbho {
  d: path("m9 15l2.5-6");
}

.e64-71crn {
  d: path("M4.625 6h14.75A2.625 2.625 0 0 1 22 8.625v6.75A2.625 2.625 0 0 1 19.375 18H4.625A2.625 2.625 0 0 1 2 15.375v-6.75A2.625 2.625 0 0 1 4.625 6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.keajmbcfy {
  fill: currentColor;
  d: path("M5.125 12.75h2.25a.625.625 0 0 1 .625.625a.625.625 0 0 1-.625.625h-2.25a.625.625 0 0 1-.625-.625a.625.625 0 0 1 .625-.625");
}

.uotnk01or {
  fill: currentColor;
  d: path("M13.375 12.75h2.25a.625.625 0 0 1 .625.625a.625.625 0 0 1-.625.625h-2.25a.625.625 0 0 1-.625-.625a.625.625 0 0 1 .625-.625");
}

.zfk1a0bxg {
  d: path("M19.25 9v6");
}
</style><g class="hntgybcog"><path class="e64-71crn"/><path class="keajmbcfy"/><path class="a7bo6jbho"/><path class="uotnk01or"/><path class="zfk1a0bxg"/></g>`,
		"fallback": "uix:card-expiry-input",
	});
}

export default Component;
