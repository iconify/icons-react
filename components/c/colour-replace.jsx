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
		"content": `<style>.gf732bsph {
  fill: currentColor;
  d: path("M5.125 2.5h2.75A2.625 2.625 0 0 1 10.5 5.125v2.75A2.625 2.625 0 0 1 7.875 10.5h-2.75A2.625 2.625 0 0 1 2.5 7.875v-2.75A2.625 2.625 0 0 1 5.125 2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ofamq_acx {
  d: path("M16.125 13.5h2.75a2.625 2.625 0 0 1 2.625 2.625v2.75a2.625 2.625 0 0 1-2.625 2.625h-2.75a2.625 2.625 0 0 1-2.625-2.625v-2.75a2.625 2.625 0 0 1 2.625-2.625M14 4.5h2.5a3 3 0 0 1 3 3v3m-2-2l2 2l2-2M10 19.5H7.5a3 3 0 0 1-3-3v-3m-2 2l2-2l2 2");
}
</style><g class="hntgybcog"><path class="gf732bsph"/><path class="ofamq_acx"/></g>`,
		"fallback": "uix:colour-replace",
	});
}

export default Component;
