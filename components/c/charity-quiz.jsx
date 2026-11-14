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

.s-loqsb3k {
  d: path("M9.75 8.5A2.25 2.25 0 1 1 12 10.75V12m0 2.75h.01");
}

.v_bbaksih {
  d: path("M12 3.5c5 0 8.5 3 8.5 7.25S17 18 12 18c-1.25 0-2.25-.15-3.25-.5L4.5 20l1-4c-1.5-1.5-2-3.25-2-5.25C3.5 6.5 7 3.5 12 3.5");
}
</style><g class="hntgybcog"><path class="v_bbaksih"/><path class="s-loqsb3k"/></g>`,
		"fallback": "uix:charity-quiz",
	});
}

export default Component;
