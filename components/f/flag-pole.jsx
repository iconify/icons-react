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
		"content": `<style>.wwf2dnm-y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 4.5c3-1.5 5 1.5 8 0c2-1 4-.75 6 .25v7.5c-2-1-4-1.25-6-.25c-3 1.5-5-1.5-8 0Zm0 0V21m-3 0h6");
}
</style><path class="wwf2dnm-y"/>`,
		"fallback": "uix-sharp:flag-pole",
	});
}

export default Component;
