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
		"content": `<style>.ot2jc_x6c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 7a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0M2.5 21v-3.5a4.5 4.5 0 0 1 9 0V21M16 11a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-1.5 10v-1.5a3.5 3.5 0 0 1 7 0V21m-10-3.5l3 2");
}
</style><path class="ot2jc_x6c"/>`,
		"fallback": "uix:child-custody",
	});
}

export default Component;
