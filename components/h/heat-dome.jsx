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
		"content": `<style>.eksh6ub6f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 19.5a5.5 5.5 0 0 1 11 0m-15 0h19M6.5 10q2.75-2 5.5 0t5.5 0m-11-5Q9.25 3 12 5t5.5 0");
}
</style><path class="eksh6ub6f"/>`,
		"fallback": "uix:heat-dome",
	});
}

export default Component;
