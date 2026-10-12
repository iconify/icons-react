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
		"content": `<style>.kbp9_7bic {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 5.25h4v13.5h-4zm10.5 0h4v13.5h-4zM2.75 12h2m14.5 0h2m-12.5 0h6.5");
}
</style><path class="kbp9_7bic"/>`,
		"fallback": "iconoven:dumbbell-sharp",
	});
}

export default Component;
