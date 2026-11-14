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
		"content": `<style>.z3h9x1upf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 3v6L4 19.5h8.247m3.973-7.217L14.5 9V3M8 3h8m-8.25 9.5h8.3m1.95 2s-3 3-3 4.5a3 3 0 0 0 6 0c0-1.5-3-4.5-3-4.5");
}
</style><path class="z3h9x1upf"/>`,
		"fallback": "uix:acid",
	});
}

export default Component;
