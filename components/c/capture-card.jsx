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
		"content": `<style>.cssbxtbva {
  d: path("M7 5H2.75v14m6.75-3v2.5h9V16m-7.75-5.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0m2.75 0h.01");
}

.hc5_i25rr {
  d: path("M8.125 5h10.75A2.625 2.625 0 0 1 21.5 7.625v5.75A2.625 2.625 0 0 1 18.875 16H8.125A2.625 2.625 0 0 1 5.5 13.375v-5.75A2.625 2.625 0 0 1 8.125 5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="hc5_i25rr"/><path class="cssbxtbva"/></g>`,
		"fallback": "uix:capture-card",
	});
}

export default Component;
