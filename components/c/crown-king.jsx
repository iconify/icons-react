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
		"content": `<style>.n5ndbbc6y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 9l5 4.5l4-4.25l4 4.25L21 9l-2 11H5Zm7.25-4.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}
</style><path class="n5ndbbc6y"/>`,
		"fallback": "uix-sharp:crown-king",
	});
}

export default Component;
