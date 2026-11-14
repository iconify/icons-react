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
		"content": `<style>.y57u7sbfn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm7-4l4-4m-4 0h4v4M8 8L4 4m4 0H4v4m12 8l4 4m-4 0h4v-4M8 16l-4 4m4 0H4v-4");
}
</style><path class="y57u7sbfn"/>`,
		"fallback": "uix-sharp:dark-energy",
	});
}

export default Component;
