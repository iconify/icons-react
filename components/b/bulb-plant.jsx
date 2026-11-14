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
		"content": `<style>.aje206b6j {
  d: path("M12 12.75c-1.75 2-2.25 5-1.5 8.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w8lt3w1fl {
  d: path("M12 9c2 2.5 5.5 4 5.5 7.5c0 3-2.5 5-5.5 5s-5.5-2-5.5-5c0-3.5 3.5-5 5.5-7.5m0 0V3m0 3c2.5 0 4.5-1.5 4.5-3.5C14 2.5 12 4 12 6");
}
</style><g class="hntgybcog"><path class="w8lt3w1fl"/><path class="aje206b6j"/></g>`,
		"fallback": "uix:bulb-plant",
	});
}

export default Component;
