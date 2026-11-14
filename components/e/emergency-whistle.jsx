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
		"content": `<style>.wyluinbql {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15 9.5A5.5 5.5 0 1 1 9.75 13H3V9.5Zm-4.25-1.75a8.5 8.5 0 0 1 8.5 0M9.25 5a11.5 11.5 0 0 1 11.5 0");
}
</style><path class="wyluinbql"/>`,
		"fallback": "uix-sharp:emergency-whistle",
	});
}

export default Component;
