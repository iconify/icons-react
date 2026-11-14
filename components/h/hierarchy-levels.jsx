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
		"content": `<style>.s626lvbfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 3l2.5 5h-5Zm-4 8h8l2.5 4.5h-13Zm-4 7.5h16l1.5 3h-19Z");
}
</style><path class="s626lvbfx"/>`,
		"fallback": "uix:hierarchy-levels",
	});
}

export default Component;
