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
		"content": `<style>.ph9wjvbvz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 9.5h13V21h-13Zm4.5-2h4v2h-4Zm-1.5-4h7v4h-7ZM9 15.25h6");
}
</style><path class="ph9wjvbvz"/>`,
		"fallback": "uix-sharp:cologne",
	});
}

export default Component;
