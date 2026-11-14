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
		"content": `<style>.a9icn-3ju {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9.561 3.561l3.878 3.878a1.5 1.5 0 0 1 0 2.122l-3.878 3.878a1.5 1.5 0 0 1-2.122 0L3.561 9.561a1.5 1.5 0 0 1 0-2.122l3.878-3.878a1.5 1.5 0 0 1 2.122 0M15 16.25h6m-1.75-1.75L21 16.25m0 3.5h-6m1.75 1.75L15 19.75");
}
</style><path class="a9icn-3ju"/>`,
		"fallback": "uix:component-swap",
	});
}

export default Component;
