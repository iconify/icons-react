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
		"content": `<style>.f-mhoth7b {
  d: path("M5.25 12a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0m10-6v2.5m3-2.5v2.5m-3 9.5v-2.5m3 2.5v-2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.selk_oake {
  d: path("M6 6h12a3.5 3.5 0 0 1 3.5 3.5v5A3.5 3.5 0 0 1 18 18H6a3.5 3.5 0 0 1-3.5-3.5v-5A3.5 3.5 0 0 1 6 6");
}
</style><g class="hntgybcog"><path class="selk_oake"/><path class="f-mhoth7b"/></g>`,
		"fallback": "uix:circle-template",
	});
}

export default Component;
