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
		"content": `<style>.o268ihaje {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 12c2-7 10-7.5 12.5-2L21 6l-2 6l2 6l-5.5-4C13 19.5 5 19 3 12Zm4-1.5h.01");
}
</style><path class="o268ihaje"/>`,
		"fallback": "uix-sharp:blue-tang",
	});
}

export default Component;
