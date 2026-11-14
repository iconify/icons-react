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
		"content": `<style>.t_m6fdw7w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 4v5.75a5.5 5.5 0 1 0 3 0V4m0 1.5l9.124 4.779M19 14s-2.75 3-2.75 5a2.75 2.75 0 0 0 5.5 0c0-2-2.75-5-2.75-5Z");
}
</style><path class="t_m6fdw7w"/>`,
		"fallback": "uix-sharp:distillation",
	});
}

export default Component;
