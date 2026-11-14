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
		"content": `<style>.l2r2jnaup {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.25 7.5h7.5v9h-7.5Zm0 3h7.5M2.5 12h2.75m-2-2.25L5.5 12l-2.25 2.25M21.5 12h-2.75m2-2.25L18.5 12l2.25 2.25");
}
</style><path class="l2r2jnaup"/>`,
		"fallback": "uix-sharp:compression-storage",
	});
}

export default Component;
