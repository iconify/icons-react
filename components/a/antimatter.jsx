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
		"content": `<style>.b5a6x7pyb {
  fill: currentColor;
  d: path("M2.5 12a4 4 0 1 0 8 0a4 4 0 1 0-8 0");
}

.hjpo_obda {
  d: path("M13.5 12a4 4 0 1 0 8 0a4 4 0 1 0-8 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="b5a6x7pyb"/><path class="hjpo_obda"/></g>`,
		"fallback": "uix:antimatter",
	});
}

export default Component;
