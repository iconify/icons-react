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
		"content": `<style>.h12etmbol {
  d: path("M10.25 5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M8 15v5m4-5v5m4-5v5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kk4uxigcp {
  d: path("M5.5 15v-2a6.5 6.5 0 0 1 13 0v2m-12 0h11a2.5 2.5 0 0 1 2.5 2.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17.5A2.5 2.5 0 0 1 6.5 15");
}
</style><g class="hntgybcog"><path class="kk4uxigcp"/><path class="h12etmbol"/></g>`,
		"fallback": "uix:beanie",
	});
}

export default Component;
