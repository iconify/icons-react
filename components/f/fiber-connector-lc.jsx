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

.notk59b1n {
  d: path("M7.125 6h.75A2.625 2.625 0 0 1 10.5 8.625v4.75A2.625 2.625 0 0 1 7.875 16h-.75A2.625 2.625 0 0 1 4.5 13.375v-4.75A2.625 2.625 0 0 1 7.125 6m9 0h.75A2.625 2.625 0 0 1 19.5 8.625v4.75A2.625 2.625 0 0 1 16.875 16h-.75a2.625 2.625 0 0 1-2.625-2.625v-4.75A2.625 2.625 0 0 1 16.125 6");
}

.ovtr0ac6g {
  d: path("M7 16h10a.833.833 0 0 1 .5 1.5l-1.6 1.2a1.5 1.5 0 0 1-.9.3H9a1.5 1.5 0 0 1-.9-.3l-1.6-1.2A.833.833 0 0 1 7 16m5 3v2.5M7.5 6V3m9 3V3");
}
</style><g class="hntgybcog"><path class="notk59b1n"/><path class="ovtr0ac6g"/></g>`,
		"fallback": "uix:fiber-connector-lc",
	});
}

export default Component;
