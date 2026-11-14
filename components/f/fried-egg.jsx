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
		"content": `<style>.g8a-8ulda {
  d: path("M5 14c-2-3 0-8 5-8.5c4-.5 8.5 1.5 10 5S18 19 13 19c-4 0-6.5-1.5-8-5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vxo3gieyf {
  d: path("M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}
</style><g class="hntgybcog"><path class="g8a-8ulda"/><path class="vxo3gieyf"/></g>`,
		"fallback": "uix:fried-egg",
	});
}

export default Component;
