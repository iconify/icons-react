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
		"content": `<style>.da9445b0x {
  d: path("M3.25 12.5a8.75 8.75 0 1 0 17.5 0a8.75 8.75 0 1 0-17.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q9pg4yu3z {
  d: path("M11.25 3.75C10.75 2.5 12.5 2 12.75 3M3.5 8.25c4.5 2.5 12.5 2.5 17 0m-17.25 3C8 13.5 16 13.5 20.75 11.25M9 15.5h.01m5.99 0h.01M10.5 18q1.5 1.125 3 0");
}
</style><g class="hntgybcog"><path class="da9445b0x"/><path class="q9pg4yu3z"/></g>`,
		"fallback": "uix:head-circumference",
	});
}

export default Component;
