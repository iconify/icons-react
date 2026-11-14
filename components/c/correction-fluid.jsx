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
		"content": `<style>.tow8m-boo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.625 9h4.75A2.625 2.625 0 0 1 17 11.625v7.25a2.625 2.625 0 0 1-2.625 2.625h-4.75A2.625 2.625 0 0 1 7 18.875v-7.25A2.625 2.625 0 0 1 9.625 9m1.125-4.5h2.5A1.75 1.75 0 0 1 15 6.25v1A1.75 1.75 0 0 1 13.25 9h-2.5A1.75 1.75 0 0 1 9 7.25v-1a1.75 1.75 0 0 1 1.75-1.75M9.5 14h5");
}
</style><path class="tow8m-boo"/>`,
		"fallback": "uix:correction-fluid",
	});
}

export default Component;
