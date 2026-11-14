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
		"content": `<style>.b375pibmz {
  d: path("M8.5 8v7.5c0 2.5 1.75 4 4 4s4.25-1.5 4.25-4V10m-5.5-3.5V13M14 7v6m-8.25-.5l2.75 2.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oz6nz8bhr {
  d: path("M2.5 21v-9.5a9.5 8.5 0 0 1 19 0V21");
}
</style><g class="hntgybcog"><path class="oz6nz8bhr"/><path class="b375pibmz"/></g>`,
		"fallback": "uix:cave-painting",
	});
}

export default Component;
