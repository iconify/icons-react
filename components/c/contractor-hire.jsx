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
		"content": `<style>.iz5-0lb6o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 17v-1.5a5.5 5.5 0 0 1 11 0V17M2 17h14.25M9 10v3M19.143 2.849l2.819 1.026l-3.25 8.927l-2.264 1.836l-.555-2.862ZM14.75 20.5h6.75");
}
</style><path class="iz5-0lb6o"/>`,
		"fallback": "uix-sharp:contractor-hire",
	});
}

export default Component;
