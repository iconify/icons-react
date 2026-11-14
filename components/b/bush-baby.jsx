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

.v1mpasbmy {
  d: path("M6 9.5c-2.5-2.5-2.5-7 .25-7C8.75 2.5 9 5.5 7.5 8M18 9.5c2.5-2.5 2.5-7-.25-7c-2.5 0-2.75 3-1.25 5.5M7 14a2 2 0 1 0 4 0a2 2 0 1 0-4 0m6 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.xy-qvi6_u {
  d: path("M4.5 14a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0");
}
</style><g class="hntgybcog"><path class="xy-qvi6_u"/><path class="v1mpasbmy"/></g>`,
		"fallback": "uix:bush-baby",
	});
}

export default Component;
