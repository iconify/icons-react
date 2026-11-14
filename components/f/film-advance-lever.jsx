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
		"content": `<style>.ecokkdbhj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.625 9h5.75A2.625 2.625 0 0 1 14 11.625v7.25a2.625 2.625 0 0 1-2.625 2.625h-5.75A2.625 2.625 0 0 1 3 18.875v-7.25A2.625 2.625 0 0 1 5.625 9M8.5 9V6.5C12 6.5 16 6 20 4m-.75-1.5l1.5 3M6.5 15.25h4");
}
</style><path class="ecokkdbhj"/>`,
		"fallback": "uix:film-advance-lever",
	});
}

export default Component;
