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
		"content": `<style>.yswph7byu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 3.5h3l-.5 9H17m-9 0V16m4.5 0v3m-5 0h10M8 21h.01M17 21h.01");
}
</style><path class="yswph7byu"/>`,
		"fallback": "uix-sharp:ergonomic-chair",
	});
}

export default Component;
