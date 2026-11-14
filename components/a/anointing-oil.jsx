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
		"content": `<style>.d1m70fvgc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 12v1.5a4.25 4.25 0 1 0 3 0V12M11 10h2a1 1 0 0 1 1 1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1a1 1 0 0 1 1-1m1-8s2 2.25 2 3.25a2 2 0 0 1-4 0c0-1 2-3.25 2-3.25");
}
</style><path class="d1m70fvgc"/>`,
		"fallback": "uix:anointing-oil",
	});
}

export default Component;
