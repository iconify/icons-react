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

.q7qitb7wu {
  d: path("M11.875 9.5h.25a4.375 4.375 0 0 1 4.375 4.375v3.25a4.375 4.375 0 0 1-4.375 4.375h-.25A4.375 4.375 0 0 1 7.5 17.125v-3.25A4.375 4.375 0 0 1 11.875 9.5");
}

.rj4-z_39g {
  d: path("M10.25 14.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m-.725-7.225a3.5 3.5 0 0 1 4.95 0M7.05 4.55a7 7 0 0 1 9.9 0");
}
</style><g class="hntgybcog"><path class="q7qitb7wu"/><path class="rj4-z_39g"/></g>`,
		"fallback": "uix:camera-remote",
	});
}

export default Component;
