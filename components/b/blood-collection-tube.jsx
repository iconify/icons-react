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
		"content": `<style>.q1qujybdh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 2.5h7V6h-7ZM9 6v13a3 3 0 0 0 6 0V6m-6 7h6");
}
</style><path class="q1qujybdh"/>`,
		"fallback": "uix-sharp:blood-collection-tube",
	});
}

export default Component;
