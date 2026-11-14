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
		"content": `<style>.j1fv44bcb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 2.5v2m0 0zA2.5 2.5 0 0 1 11.5 7v4A2.5 2.5 0 0 1 9 13.5A2.5 2.5 0 0 1 6.5 11V7A2.5 2.5 0 0 1 9 4.5m0 9v8m7.75-13zA2.25 2.25 0 0 1 19 10.75v2.5a2.25 2.25 0 0 1-2.25 2.25a2.25 2.25 0 0 1-2.25-2.25v-2.5a2.25 2.25 0 0 1 2.25-2.25m0 7v6M9 21.5c-2-2.5-4-4-5-5");
}
</style><path class="j1fv44bcb"/>`,
		"fallback": "uix:bulrush",
	});
}

export default Component;
