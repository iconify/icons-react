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

.l-_umb5aw {
  d: path("M19.25 7.75a8.5 8.5 0 1 0-11.5 11.5a9.5 9.5 0 0 1 11.5-11.5M15.5 15.5a3 1.5 0 1 0 6 0a3 1.5 0 1 0-6 0");
}

.p5l9nffap {
  d: path("M15.5 15.5v4a3 1.5 0 0 0 6 0v-4");
}
</style><g class="hntgybcog"><path class="l-_umb5aw"/><path class="p5l9nffap"/></g>`,
		"fallback": "uix:data-night",
	});
}

export default Component;
