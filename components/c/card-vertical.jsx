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
		"content": `<style>.bvxlpobsj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.375 3h5.25A4.375 4.375 0 0 1 19 7.375v9.25A4.375 4.375 0 0 1 14.625 21h-5.25A4.375 4.375 0 0 1 5 16.625v-9.25A4.375 4.375 0 0 1 9.375 3M5 10.5h14m-11 4h8M8 18h4");
}
</style><path class="bvxlpobsj"/>`,
		"fallback": "uix:card-vertical",
	});
}

export default Component;
