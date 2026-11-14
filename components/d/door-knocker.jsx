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

.w66s_5brg {
  d: path("M8.5 2.5h7A3.5 3.5 0 0 1 19 6v12a3.5 3.5 0 0 1-3.5 3.5h-7A3.5 3.5 0 0 1 5 18V6a3.5 3.5 0 0 1 3.5-3.5m3.5 3v2");
}

.yvtgyiiuw {
  d: path("M8 11.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0");
}
</style><g class="hntgybcog"><path class="w66s_5brg"/><path class="yvtgyiiuw"/></g>`,
		"fallback": "uix:door-knocker",
	});
}

export default Component;
