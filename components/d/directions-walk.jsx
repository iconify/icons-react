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
		"content": `<style>.e6aqm9b5u {
  d: path("M11.5 4a2 2 0 1 0 4 0a2 2 0 1 0-4 0m.5 4.5l-1.5 6l3 3V21m-3-6.5L8 21");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oh-560cgq {
  d: path("M8 12.5L9.5 9l2.5-.5l2.5 3l2.5 1");
}
</style><g class="hntgybcog"><path class="e6aqm9b5u"/><path class="oh-560cgq"/></g>`,
		"fallback": "uix:directions-walk",
	});
}

export default Component;
