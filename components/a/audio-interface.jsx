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

.rj-ujlb4i {
  d: path("M6 7.5h12a3.5 3.5 0 0 1 3.5 3.5v2a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 13v-2A3.5 3.5 0 0 1 6 7.5");
}

.seqwv_qjw {
  d: path("M5 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0m6 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0m7.5 0h.01");
}
</style><g class="hntgybcog"><path class="rj-ujlb4i"/><path class="seqwv_qjw"/></g>`,
		"fallback": "uix:audio-interface",
	});
}

export default Component;
