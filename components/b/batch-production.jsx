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
		"content": `<style>.bgkysvpii {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.75 3h8.5v6.75h-8.5ZM2.5 12.5h8V21h-8Zm11 0h8V21h-8ZM12 3v3m-5.5 6.5v3m11-3v3");
}
</style><path class="bgkysvpii"/>`,
		"fallback": "uix-sharp:batch-production",
	});
}

export default Component;
