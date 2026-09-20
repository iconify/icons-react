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

.sxlwlmkmh {
  d: path("M4 12h16");
}

.zuykpur_s {
  d: path("m10 6 -6 6 6 6");
}
</style><g class="hntgybcog"><path class="sxlwlmkmh"/><path class="zuykpur_s"/></g>`,
		"fallback": "iconmind:arrow-back-outline-thin",
	});
}

export default Component;
