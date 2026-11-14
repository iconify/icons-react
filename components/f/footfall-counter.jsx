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

.potptnjqz {
  d: path("M11 4.5h2A1.5 1.5 0 0 1 14.5 6A1.5 1.5 0 0 1 13 7.5h-2A1.5 1.5 0 0 1 9.5 6A1.5 1.5 0 0 1 11 4.5M4 13h3m2.75 0h4.5M17 13h3");
}

.tzg9rjb0p {
  d: path("M4 21.5v-17h16v17");
}
</style><g class="hntgybcog"><path class="tzg9rjb0p"/><path class="potptnjqz"/></g>`,
		"fallback": "uix:footfall-counter",
	});
}

export default Component;
