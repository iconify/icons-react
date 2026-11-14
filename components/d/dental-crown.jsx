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
		"content": `<style>.h2x22l5ti {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 11c0-5 1-8 4.5-8c2 0 2.5 1.5 4 1.5S14 3 16 3c3.5 0 4.5 3 4.5 8ZM6 11l1 8.5c.25 1.5 2 1.5 2.25 0l1-4.5c.25-1 3.25-1 3.5 0l1 4.5c.25 1.5 2 1.5 2.25 0l1-8.5");
}
</style><path class="h2x22l5ti"/>`,
		"fallback": "uix-sharp:dental-crown",
	});
}

export default Component;
