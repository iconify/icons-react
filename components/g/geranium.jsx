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
		"content": `<style>.jmy-cmbxn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 4.5a2 2 0 1 1 4 0A2 2 0 1 1 15 8a2 2 0 1 1-3 2.25A2 2 0 1 1 9 8a2 2 0 1 1 1-3.5Zm2 5.75v7.25m-4.5 0h9l-1 4h-7Zm4.5 0C9.5 14 7 12.75 4.5 13C5 15.5 8 16.5 12 17.5Zm0 0c2.5-3.5 5-4.75 7.5-4.5c-.5 2.5-3.5 3.5-7.5 4.5Z");
}
</style><path class="jmy-cmbxn"/>`,
		"fallback": "uix-sharp:geranium",
	});
}

export default Component;
