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
		"content": `<style>.j2n7nyblr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 16V6.5h5C9 10 12 11.5 16 12c3 .5 5 1.5 5 4h-1.5a1.5 1.5 0 0 1-3 0h-3a1.5 1.5 0 0 1-3 0h-3a1.5 1.5 0 0 1-3 0Z");
}
</style><path class="j2n7nyblr"/>`,
		"fallback": "uix:golf-shoe",
	});
}

export default Component;
