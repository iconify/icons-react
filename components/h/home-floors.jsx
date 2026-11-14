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
		"content": `<style>.mxdjvubla {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 10L12 2.5l8.5 7.5v11.5h-17Zm0 3.75h17m-17 4h17");
}
</style><path class="mxdjvubla"/>`,
		"fallback": "uix-sharp:home-floors",
	});
}

export default Component;
