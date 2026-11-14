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
		"content": `<style>.cqex4ub-x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6.5 20.5l8-10.5c1.5-2.5.75-6.75-2.5-6.75S8 7.5 9.5 10l.75 1M14 15.75l3.5 4.75");
}
</style><path class="cqex4ub-x"/>`,
		"fallback": "uix:cause-hiv",
	});
}

export default Component;
