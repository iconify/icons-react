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
		"content": `<style>.z3scrqugf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 6V4h18v2M4 15c3-4.5 9-4.5 11.5 0l4.5-3.5v7L15.5 15C13 19.5 7 19.5 4 15Zm4.5-.5h.01");
}
</style><path class="z3scrqugf"/>`,
		"fallback": "uix-sharp:fishing-quota",
	});
}

export default Component;
