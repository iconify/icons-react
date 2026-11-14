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
		"content": `<style>.biskn-bvf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 20.5L9 15h7.5M9 15V7m2.75 5.25v-5M8 5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m8.5 10a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}
</style><path class="biskn-bvf"/>`,
		"fallback": "uix:carboxyl-group",
	});
}

export default Component;
