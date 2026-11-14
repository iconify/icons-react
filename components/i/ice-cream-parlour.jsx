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

.qdam_gbwp {
  d: path("M3 6.5L4.5 3h15L21 6.5m-18 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0m-16.5 5V21h9.8m5.2-8.9v-.6");
}

.ui0x3jbin {
  d: path("M7.5 21v-5.5h4V21m4-3.5l2.5 4.25l2.5-4.25m-5.25 0a2.75 2.75 0 0 1 5.5 0Z");
}
</style><g class="hntgybcog"><path class="qdam_gbwp"/><path class="ui0x3jbin"/></g>`,
		"fallback": "uix:ice-cream-parlour",
	});
}

export default Component;
