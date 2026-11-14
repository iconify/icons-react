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
		"content": `<style>.ue5z9gvbq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 9H6a2 2 0 0 0 0 4h2.5L7 18.5a2 2 0 0 0 3.75 1.25L12 16.5l1.25 3.25A2 2 0 0 0 17 18.5L15.5 13H18a2 2 0 0 0 0-4h-4a3.5 3.5 0 1 0-4 0Zm2 3.5h.01");
}
</style><path class="ue5z9gvbq"/>`,
		"fallback": "uix-sharp:christmas-cookie-star",
	});
}

export default Component;
