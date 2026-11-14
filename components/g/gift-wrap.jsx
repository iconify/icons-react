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
		"content": `<style>.cd-3t9bcs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.125 8.5h11.75a2.625 2.625 0 0 1 2.625 2.625v7.75a2.625 2.625 0 0 1-2.625 2.625H6.125A2.625 2.625 0 0 1 3.5 18.875v-7.75A2.625 2.625 0 0 1 6.125 8.5m-2.625 4h17m-8.5-4v13m0-13c-2-5-6-4.5-4 0m4 0c2-5 6-4.5 4 0");
}
</style><path class="cd-3t9bcs"/>`,
		"fallback": "uix:gift-wrap",
	});
}

export default Component;
