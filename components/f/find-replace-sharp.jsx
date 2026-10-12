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
		"content": `<style>.sbrv9jg9y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.25 8.5a5.75 5.75 0 1 1-11.5 0a5.75 5.75 0 0 1 11.5 0m-1.65 4.1L15 15m-.75 4H21m-2.25-2.25L21 19l-2.25 2.25");
}
</style><path class="sbrv9jg9y"/>`,
		"fallback": "iconoven:find-replace-sharp",
	});
}

export default Component;
