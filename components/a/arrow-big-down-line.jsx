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
		"content": `<style>.agyw-e8jb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m11.01 20.01l-6.77-6.77q-.99-.99.41-.99H7.1q1.4 0 1.4-1.4v-6.2q0-1.4 1.4-1.4h4.2q1.4 0 1.4 1.4v6.2q0 1.4 1.4 1.4h2.45q1.4 0 .41.99l-6.77 6.77q-.99.99-1.98 0");
}
</style><path class="agyw-e8jb"/>`,
		"fallback": "iconoven:arrow-big-down-line",
	});
}

export default Component;
