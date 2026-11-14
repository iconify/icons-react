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
		"content": `<style>.ce0dzhbee {
  d: path("M3.5 8L8 4h10.5L21 9v8l-4 3.5H6L3 16Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uf70owbhn {
  d: path("M7.5 16.5c0-6.5 3-9 9.5-9c0 6.5-3 9-9.5 9m0 0l6.75-6.5");
}
</style><g class="hntgybcog"><path class="ce0dzhbee"/><path class="uf70owbhn"/></g>`,
		"fallback": "uix:fossil-leaf",
	});
}

export default Component;
