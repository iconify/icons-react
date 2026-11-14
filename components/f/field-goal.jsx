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
		"content": `<style>.h1fafmbqp {
  d: path("M5 2.5v9h14v-9m-7 9v10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oqb42p36c {
  d: path("M8.5 6a3.5 2.25 0 1 0 7 0a3.5 2.25 0 1 0-7 0");
}
</style><g class="hntgybcog"><path class="h1fafmbqp"/><path class="oqb42p36c"/></g>`,
		"fallback": "uix:field-goal",
	});
}

export default Component;
