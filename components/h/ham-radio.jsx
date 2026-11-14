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

.ieu8e-a6d {
  d: path("M6.5 10.5h11A3.5 3.5 0 0 1 21 14v3a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 17v-3a3.5 3.5 0 0 1 3.5-3.5m9.5 0v-5");
}

.tl362pbwb {
  d: path("M6 15.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0M19.031 3.75a3.5 3.5 0 0 1 0 3.5m-6.062 0a3.5 3.5 0 0 1 0-3.5");
}
</style><g class="hntgybcog"><path class="ieu8e-a6d"/><path class="tl362pbwb"/></g>`,
		"fallback": "uix:ham-radio",
	});
}

export default Component;
