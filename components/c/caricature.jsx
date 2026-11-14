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

.m9ielbcdf {
  d: path("M12 2.5c5.5 0 8.5 3.5 8.5 8c0 5.5-5 11-8.5 11s-8.5-5.5-8.5-11c0-4.5 3-8 8.5-8");
}

.s1jdutb-m {
  d: path("M6.5 10a2 2 0 1 0 4 0a2 2 0 1 0-4 0m7 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M12 13.5l-1.75 3h3");
}
</style><g class="hntgybcog"><path class="m9ielbcdf"/><path class="s1jdutb-m"/></g>`,
		"fallback": "uix:caricature",
	});
}

export default Component;
