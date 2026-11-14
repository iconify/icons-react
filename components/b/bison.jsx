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
		"content": `<style>.k_30ufgyy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 8c0-4.5 10-4.5 10 0c0 3-1.5 5-2 7q-.75 4.5-3 4.5T9 15c-.5-2-2-4-2-7Zm0 0c-2.5.5-4-1-3.5-4M17 8c2.5.5 4-1 3.5-4M10 11h.01M14 11h.01");
}
</style><path class="k_30ufgyy"/>`,
		"fallback": "uix-sharp:bison",
	});
}

export default Component;
