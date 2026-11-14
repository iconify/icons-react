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

.qwkzdyb0f {
  d: path("m4 10.5l8-7l8 7v10H4Z");
}

.vxqkkhbsg {
  d: path("M8.75 14.25a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0m3.25 0h.01");
}
</style><g class="hntgybcog"><path class="qwkzdyb0f"/><path class="vxqkkhbsg"/></g>`,
		"fallback": "uix:camera-indoor",
	});
}

export default Component;
