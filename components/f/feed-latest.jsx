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
		"content": `<style>.lu4pw8c7s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 3.5h8a1.75 1.75 0 0 1 1.75 1.75v.5a1.75 1.75 0 0 1-1.75 1.75h-8A1.75 1.75 0 0 1 3 5.75v-.5A1.75 1.75 0 0 1 4.75 3.5m0 6.75h8A1.75 1.75 0 0 1 14.5 12v.5a1.75 1.75 0 0 1-1.75 1.75h-8A1.75 1.75 0 0 1 3 12.5V12a1.75 1.75 0 0 1 1.75-1.75m0 6.75h8a1.75 1.75 0 0 1 1.75 1.75v.5A1.75 1.75 0 0 1 12.75 21h-8A1.75 1.75 0 0 1 3 19.25v-.5A1.75 1.75 0 0 1 4.75 17m15-7V3m-2 2l2-2l2 2");
}
</style><path class="lu4pw8c7s"/>`,
		"fallback": "uix:feed-latest",
	});
}

export default Component;
