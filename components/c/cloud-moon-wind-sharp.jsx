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
		"content": `<style>.fh1ac8bul {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.96 20.89a3.36 3.36 0 0 1-.46-6.69a4.83 4.83 0 0 1 8.95-1.16a3.78 3.78 0 0 1-.51 7.85Zm-4.08-7.92A5.75 5.75 0 0 1 8.45 2.75m1.48 5.89L6.092 6.47l2.398-3.7");
}
</style><path class="fh1ac8bul"/>`,
		"fallback": "iconoven:cloud-moon-wind-sharp",
	});
}

export default Component;
