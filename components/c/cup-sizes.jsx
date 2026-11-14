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
		"content": `<style>.x9j1zyb_s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.25 13h4v1.5h-.5l-.5 6h-2l-.5-6h-.5ZM9 9.5h4.75V11h-.5l-.75 9.5h-2.25L9.5 11H9ZM16.5 5H22v1.5h-.5l-.75 14h-3L17 6.5h-.5Z");
}
</style><path class="x9j1zyb_s"/>`,
		"fallback": "uix-sharp:cup-sizes",
	});
}

export default Component;
