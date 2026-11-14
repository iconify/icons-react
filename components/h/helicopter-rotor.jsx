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
		"content": `<style>.r53po7wbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 14.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0m2-2v-7.5m1.732 10.5L20.227 19m-9.959-3.75L3.773 19");
}
</style><path class="r53po7wbs"/>`,
		"fallback": "uix:helicopter-rotor",
	});
}

export default Component;
