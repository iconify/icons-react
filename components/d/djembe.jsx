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

.o74-2lb8l {
  d: path("m8 7l2 3l2-3l2 3l2-3");
}

.q1mw3qbwr {
  d: path("M4.25 4h15.5c0 4-2.5 7.25-5.25 9.25l2.5 8H7l2.5-8C6.75 11.25 4.25 8 4.25 4");
}
</style><g class="hntgybcog"><path class="q1mw3qbwr"/><path class="o74-2lb8l"/></g>`,
		"fallback": "iconoven:djembe",
	});
}

export default Component;
