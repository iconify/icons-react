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

.lyiugkbct {
  d: path("M5.75 12.5zA2.25 2.25 0 0 1 8 14.75v2.5a2.25 2.25 0 0 1-2.25 2.25a2.25 2.25 0 0 1-2.25-2.25v-2.5a2.25 2.25 0 0 1 2.25-2.25m12.5 0za2.25 2.25 0 0 1 2.25 2.25v2.5a2.25 2.25 0 0 1-2.25 2.25A2.25 2.25 0 0 1 16 17.25v-2.5a2.25 2.25 0 0 1 2.25-2.25");
}

.ukg0kpkum {
  d: path("M4.5 13v-1a7.5 7.5 0 0 1 15 0v1");
}
</style><g class="hntgybcog"><path class="ukg0kpkum"/><path class="lyiugkbct"/></g>`,
		"fallback": "uix:audio-guide",
	});
}

export default Component;
