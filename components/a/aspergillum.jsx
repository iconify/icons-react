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
		"content": `<style>.cefl24cxx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m16.914 3.757l2.829 2.829a1 1 0 0 1 0 1.414L15.5 12.243a1 1 0 0 1-1.414 0l-2.829-2.829a1 1 0 0 1 0-1.414L15.5 3.757a1 1 0 0 1 1.414 0ZM12.75 10.75L4.5 19M15 17h.01m3.49-.5h.01m1.99-3h.01");
}
</style><path class="cefl24cxx"/>`,
		"fallback": "uix-sharp:aspergillum",
	});
}

export default Component;
