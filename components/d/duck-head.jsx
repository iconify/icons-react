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
		"content": `<style>.bbh99sbyl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M17 13h3.5q1.5 0 1.25 1.75q-.5 2-6 1.25A7 7 0 1 1 17 13Zm-5-3.5h.01");
}
</style><path class="bbh99sbyl"/>`,
		"fallback": "uix-sharp:duck-head",
	});
}

export default Component;
