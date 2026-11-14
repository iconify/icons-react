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
		"content": `<style>.z3wfmmbiu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 8.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0m-2.5 13c0-3.25 3.5-5.5 8-5.5s8 2.25 8 5.5M18.5 8c-1.5 2-1.75 4 0 4s1.5-2 0-4");
}
</style><path class="z3wfmmbiu"/>`,
		"fallback": "uix:grieving-person",
	});
}

export default Component;
