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
		"content": `<style>.z__buw7vi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 4.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M12 9.5v6M7.5 10l4.5 2.5l4.5-2.5M4 15.5h16m-8 0V21m0-3.5l-3.5 3m3.5-3l3.5 3");
}
</style><path class="z__buw7vi"/>`,
		"fallback": "uix:grounding",
	});
}

export default Component;
