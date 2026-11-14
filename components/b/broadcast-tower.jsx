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
		"content": `<style>.h76uqy0ft {
  d: path("M10.5 6a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m-1.25 8.5h5.5m1.08-11.714a5 5 0 0 1 0 6.428m-7.66 0a5 5 0 0 1 0-6.428");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wag2yxudr {
  d: path("m6.5 21.5l5.5-14l5.5 14");
}
</style><g class="hntgybcog"><path class="wag2yxudr"/><path class="h76uqy0ft"/></g>`,
		"fallback": "uix:broadcast-tower",
	});
}

export default Component;
