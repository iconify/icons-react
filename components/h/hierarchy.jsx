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
		"content": `<style>.p6zn60b6r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 2.5h6v5H9Zm-6 14h6v5H3Zm12 0h6v5h-6Zm-3-9V12m-6 4.5v-3A1.5 1.5 0 0 1 7.5 12h9a1.5 1.5 0 0 1 1.5 1.5v3");
}
</style><path class="p6zn60b6r"/>`,
		"fallback": "uix-sharp:hierarchy",
	});
}

export default Component;
