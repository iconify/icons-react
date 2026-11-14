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
		"content": `<style>.eb-erwbma {
  d: path("M5.625 6h7.75A2.625 2.625 0 0 1 16 8.625v3.75A2.625 2.625 0 0 1 13.375 15h-7.75A2.625 2.625 0 0 1 3 12.375v-3.75A2.625 2.625 0 0 1 5.625 6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wdl9m7bcs {
  d: path("M3 17.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m8 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M16 9l4.5-4.5m-1.25-1.25l2.5 2.5");
}
</style><g class="hntgybcog"><path class="eb-erwbma"/><path class="wdl9m7bcs"/></g>`,
		"fallback": "uix:camp-wagon",
	});
}

export default Component;
