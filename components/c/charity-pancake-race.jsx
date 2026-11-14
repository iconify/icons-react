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
		"content": `<style>.y5bh72blj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12h14v2.5a4 4 0 0 1-4 4h-6a4 4 0 0 1-4-4Zm14 1l5-2m-13-5a4 1.5 0 1 0 8 0a4 1.5 0 1 0-8 0m-5 3.25c0-2.75 1-4.5 3-6");
}
</style><path class="y5bh72blj"/>`,
		"fallback": "uix:charity-pancake-race",
	});
}

export default Component;
