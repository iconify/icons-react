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

.hnvnn0bgl {
  d: path("m12 2.75l7.5 2.75v6c0 4.7-3.1 8-7.5 9.75c-4.4-1.75-7.5-5.05-7.5-9.75v-6Z");
}

.x4eh0wl5p {
  d: path("M9.5 8.75C9.5 7.3 10.6 6.5 12 6.5s2.5.9 2.5 2.25c0 1.85-2.5 2.15-2.5 3.75m0 3.25h.01");
}
</style><g class="hntgybcog"><path class="hnvnn0bgl"/><path class="x4eh0wl5p"/></g>`,
		"fallback": "uix:help-shield",
	});
}

export default Component;
