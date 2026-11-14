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
		"content": `<style>.m9j9td5kx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 6.5h18v14H3Zm3.5 0v-3H3m14.5 3v-3H21m-13.5 6v8m4.5-8v8m4.5-8v8");
}
</style><path class="m9j9td5kx"/>`,
		"fallback": "uix-sharp:condenser",
	});
}

export default Component;
