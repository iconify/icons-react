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
		"content": `<style>.aucffm-gj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.541 2.824a9.5 9.5 0 0 1 4.918 0m4.259 2.458a9.5 9.5 0 0 1 2.458 4.259m0 4.918a9.5 9.5 0 0 1-2.458 4.259m-4.259 2.458a9.5 9.5 0 0 1-4.918 0m-4.259-2.458a9.5 9.5 0 0 1-2.458-4.259m0-4.918a9.5 9.5 0 0 1 2.458-4.259M9 10a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm-2 7.5c1-1.75 2.75-2.5 5-2.5s4 .75 5 2.5");
}
</style><path class="aucffm-gj"/>`,
		"fallback": "uix-sharp:avatar-placeholder",
	});
}

export default Component;
