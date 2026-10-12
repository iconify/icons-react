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
		"content": `<style>.nvoxyibmf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 13.5h17.5a8.75 7.75 0 0 1-17.5 0Zm6.25-3L8 8.625L9.5 6.75L11 4.875L9.5 3m5 7.5L13 8.625l1.5-1.875L16 4.875L14.5 3");
}
</style><path class="nvoxyibmf"/>`,
		"fallback": "iconoven:facial-steamer-sharp",
	});
}

export default Component;
