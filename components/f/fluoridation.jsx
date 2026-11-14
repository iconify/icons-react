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
		"content": `<style>.bib_gccbi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5H7a2.5 2.5 0 0 1 2.5 2.5v1m-6.25-6h3m-1.5 0V5m10 8c0-2.25 2-3 3.5-2c1.5-1 3.5-.25 3.5 2c0 2.5-1 3.5-1.25 5.5c-.25 2.5-1.75 2.5-2 .5l-.25-1.5L18 19c-.25 2-1.75 2-2-.5c-.25-2-1.25-3-1.25-5.5ZM9.5 11.25c-1.5 2-2.25 3.25-2.25 4.25a2.25 2.25 0 0 0 4.5 0c0-1-.75-2.25-2.25-4.25Z");
}
</style><path class="bib_gccbi"/>`,
		"fallback": "uix-sharp:fluoridation",
	});
}

export default Component;
