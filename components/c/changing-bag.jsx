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

.smdaas77c {
  d: path("M5 4q7-1.5 14 0q2.5 8 0 16q-7 1.5-14 0q-2.5-8 0-16");
}

.vkaq7-8uv {
  d: path("M6.5 13a2 2 0 1 0 4 0a2 2 0 1 0-4 0m7 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><g class="hntgybcog"><path class="smdaas77c"/><path class="vkaq7-8uv"/></g>`,
		"fallback": "uix:changing-bag",
	});
}

export default Component;
