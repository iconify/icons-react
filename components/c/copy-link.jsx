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
		"content": `<style>.bae6u2b-e {
  d: path("M13 12h-.5a2.5 2.5 0 0 0 0 5h.5m3-5h.5a2.5 2.5 0 0 1 0 5H16m-3-2.5h3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wm8xwvb8g {
  d: path("M12.875 8.5h3.25a4.375 4.375 0 0 1 4.375 4.375v3.25a4.375 4.375 0 0 1-4.375 4.375h-3.25A4.375 4.375 0 0 1 8.5 16.125v-3.25A4.375 4.375 0 0 1 12.875 8.5M4 14.5V6a2.5 2.5 0 0 1 2.5-2.5h8");
}
</style><g class="hntgybcog"><path class="wm8xwvb8g"/><path class="bae6u2b-e"/></g>`,
		"fallback": "uix:copy-link",
	});
}

export default Component;
