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

.ijm8161nx {
  fill: currentColor;
  d: path("M10 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.ts7_libxb {
  d: path("M8.465 7.787a5.5 5.5 0 0 1 7.07 0m0 8.426a5.5 5.5 0 0 1-7.07 0M5.459 5.459a9.25 9.25 0 0 1 13.082 0m0 13.082a9.25 9.25 0 0 1-13.082 0");
}
</style><g class="hntgybcog"><path class="ts7_libxb"/><path class="ijm8161nx"/></g>`,
		"fallback": "uix:force-field",
	});
}

export default Component;
