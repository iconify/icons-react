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
		"content": `<style>.j5l388b5h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 10h11l-1.25 11.5h-8.5Zm0 0q0-4 3.5-4q2-3.5 4 0q3.5 0 3.5 4m-4-3l3-4.5");
}
</style><path class="j5l388b5h"/>`,
		"fallback": "uix:frappe",
	});
}

export default Component;
