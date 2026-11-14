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

.ih0772bea {
  d: path("M9.5 8.25a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M8.5 16c0-1.5 1.5-2.25 3.5-2.25s3.5.75 3.5 2.25");
}
</style><g class="hntgybcog"><path class="hnvnn0bgl"/><path class="ih0772bea"/></g>`,
		"fallback": "uix:citizen-shield",
	});
}

export default Component;
