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
		"content": `<style>.g_godccaa {
  d: path("m7 17l4.5-4l3.5-2l4-4.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zrjqjgbgu {
  d: path("M3.5 3.5v17h17M7 6.5h13.5");
}
</style><g class="hntgybcog"><path class="zrjqjgbgu"/><path class="g_godccaa"/></g>`,
		"fallback": "uix:burnup-chart",
	});
}

export default Component;
