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
		"content": `<style>.y4vxu7btz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4 9l9 11m0-11L4 20M16.5 4.5a1.75 1.75 0 0 1 3.5.25c0 1.5-3.5 2.25-3.5 3.75h4");
}
</style><path class="y4vxu7btz"/>`,
		"fallback": "uix:chi-square",
	});
}

export default Component;
