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
		"content": `<style>.rhmk6b2ob {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 5v8h18V5M3 9.5h18M9.75 15.75h10a1.75 1.75 0 0 1 1.75 1.75v.5a1.75 1.75 0 0 1-1.75 1.75h-10A1.75 1.75 0 0 1 8 18v-.5a1.75 1.75 0 0 1 1.75-1.75");
}
</style><path class="rhmk6b2ob"/>`,
		"fallback": "uix:day-bed-trundle",
	});
}

export default Component;
