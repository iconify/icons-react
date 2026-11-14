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
		"content": `<style>.svz81kbma {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 3h15l2 5.5h-19ZM4 8.5v13h8.2m7.8-8.4V8.5M9.5 3l-.75 5.5M14.5 3l.75 5.5m-.25 9h6.5v4H15Zm3.25 0v4m0-4c-1.75-3-3.5-.75 0 0c3.5-.75 1.75-3 0 0");
}
</style><path class="svz81kbma"/>`,
		"fallback": "uix-sharp:gift-shop",
	});
}

export default Component;
