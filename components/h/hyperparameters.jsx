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
		"content": `<style>.t6s_t9bcl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5H6m4 0h11.5m-19 7H13m4 0h4.5m-19 7H8m4 0h9.5M6 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm7 7a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-5 7a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}
</style><path class="t6s_t9bcl"/>`,
		"fallback": "uix-sharp:hyperparameters",
	});
}

export default Component;
