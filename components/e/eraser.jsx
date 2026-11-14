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
		"content": `<style>.s64z_ubnz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7.5 20.5l-4-4c-.75-.75-.75-2.25 0-3l9-9c.75-.75 2.25-.75 3 0L20 9c.75.75.75 2.25 0 3l-8.5 8.5Zm4 0H21M7.5 9.5L15 17");
}
</style><path class="s64z_ubnz"/>`,
		"fallback": "uix-sharp:eraser",
	});
}

export default Component;
