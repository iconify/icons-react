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
		"content": `<style>.xie48obnq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 4h13A2.5 2.5 0 0 1 21 6.5A2.5 2.5 0 0 1 18.5 9h-13A2.5 2.5 0 0 1 3 6.5A2.5 2.5 0 0 1 5.5 4m1.625 5h9.75a2.625 2.625 0 0 1 2.625 2.625v6.25a2.625 2.625 0 0 1-2.625 2.625h-9.75A2.625 2.625 0 0 1 4.5 17.875v-6.25A2.625 2.625 0 0 1 7.125 9M9.5 13.5h5");
}
</style><path class="xie48obnq"/>`,
		"fallback": "uix:category-storage",
	});
}

export default Component;
