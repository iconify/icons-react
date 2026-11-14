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
		"content": `<style>.c8e209b6s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.044 20.5H3.5v-10L12 3.25l8.5 7.25v.456M18.75 14a2.5 2.5 0 1 0 2.75 2.75m-4.25 1.5L14.5 21");
}
</style><path class="c8e209b6s"/>`,
		"fallback": "uix-sharp:home-maintenance",
	});
}

export default Component;
