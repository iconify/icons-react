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
		"content": `<style>.obhbozber {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 7.25c3-4.5 9.5-4.5 12.5 0l5-3.5v7l-5-3.5c-3 4.5-9.5 4.5-12.5 0ZM6 17.5a6 3.5 0 1 0 12 0a6 3.5 0 1 0-12 0ZM7.5 6.75h.01");
}
</style><path class="obhbozber"/>`,
		"fallback": "uix-sharp:fish-oil",
	});
}

export default Component;
