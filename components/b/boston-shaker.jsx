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
		"content": `<style>.u15o95b2a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 12h11l-2 9.5h-7ZM8 12l1.5-9.5h5L16 12");
}
</style><path class="u15o95b2a"/>`,
		"fallback": "uix-sharp:boston-shaker",
	});
}

export default Component;
