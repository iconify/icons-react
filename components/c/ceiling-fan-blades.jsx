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

.ts6777bmd {
  d: path("m14.75 13.5l5 2.75a2.5 2.5 0 0 1-3.5 3.5l-2.75-5Zm-5.5 0l-5 2.75a2.5 2.5 0 0 0 3.5 3.5l2.75-5Zm5.5-3l5-2.75a2.5 2.5 0 0 0-3.5-3.5l-2.75 5Zm-5.5 0l-5-2.75a2.5 2.5 0 0 1 3.5-3.5l2.75 5Z");
}

.vxo3gieyf {
  d: path("M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}
</style><g class="hntgybcog"><path class="vxo3gieyf"/><path class="ts6777bmd"/></g>`,
		"fallback": "uix:ceiling-fan-blades",
	});
}

export default Component;
