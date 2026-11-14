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

.j871lkdmh {
  d: path("M13.875 11h5a2.625 2.625 0 0 1 2.625 2.625v4.25a2.625 2.625 0 0 1-2.625 2.625h-5a2.625 2.625 0 0 1-2.625-2.625v-4.25A2.625 2.625 0 0 1 13.875 11M2.5 7h15M15 14.25l3 3m0-3l-3 3");
}

.jct3fj_gk {
  d: path("M8.5 16h-4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3.25");
}
</style><g class="hntgybcog"><path class="jct3fj_gk"/><path class="j871lkdmh"/></g>`,
		"fallback": "uix:adware",
	});
}

export default Component;
