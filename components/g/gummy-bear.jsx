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
		"content": `<style>.bbvv8q0ar {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 10.25C8.5 9.75 7.75 7.75 8.25 6a1.75 1.75 0 1 1 2-2.25q1.75-.75 3.5 0a1.75 1.75 0 1 1 2 2.25c.5 1.75-.25 3.75-1.75 4.25l4.5.5a1.75 1.75 0 0 1 0 3.5h-3c.5 1.25 1 3.25 1 5.25a2 2 0 0 1-3.75 0q-.75-2-1.5 0a2 2 0 0 1-3.75 0c0-2 .5-4 1-5.25h-3a1.75 1.75 0 0 1 0-3.5ZM10.75 7h.01m2.49 0h.01");
}
</style><path class="bbvv8q0ar"/>`,
		"fallback": "uix-sharp:gummy-bear",
	});
}

export default Component;
