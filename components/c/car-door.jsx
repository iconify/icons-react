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

.rt5xcbbip {
  d: path("m3.5 11.5l6.5-8h8.5a2 2 0 0 1 2 2V19a2.5 2.5 0 0 1-2.5 2.5H5.5a2 2 0 0 1-2-2Z");
}

.yyp5l0vnx {
  d: path("m8 10.5l3.75-4.25h5.75v4.25Zm6.5 3.5h3");
}
</style><g class="hntgybcog"><path class="rt5xcbbip"/><path class="yyp5l0vnx"/></g>`,
		"fallback": "uix:car-door",
	});
}

export default Component;
