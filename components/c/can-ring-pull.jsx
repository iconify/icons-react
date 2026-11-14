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
		"content": `<style>.ahrvadcgi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 9.25h14V21.5H5ZM5 12h14M5 18.75h14M13 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-2 4.75L13.75 6");
}
</style><path class="ahrvadcgi"/>`,
		"fallback": "uix-sharp:can-ring-pull",
	});
}

export default Component;
