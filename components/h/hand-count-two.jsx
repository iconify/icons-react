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
		"content": `<style>.f4d0csbjp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.5 12l-.75-7a1.75 1.75 0 0 1 3.5-.25l1 5.25l1.25-6a1.75 1.75 0 0 1 3.25.5l-.75 6q4.5-1 5 2V15c0 4-2.5 6.5-6 6.5c-4 0-6.5-2.5-6.5-6.5Zm4 2.5H15");
}
</style><path class="f4d0csbjp"/>`,
		"fallback": "uix-sharp:hand-count-two",
	});
}

export default Component;
