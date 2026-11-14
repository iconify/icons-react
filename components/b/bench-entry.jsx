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
		"content": `<style>.kgz1x12th {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7h19v5.5h-19Zm0 2.75h19M6 12.5L4.5 18M18 12.5l1.5 5.5");
}
</style><path class="kgz1x12th"/>`,
		"fallback": "uix-sharp:bench-entry",
	});
}

export default Component;
