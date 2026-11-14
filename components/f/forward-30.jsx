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
		"content": `<style>.an9xw6bos {
  d: path("m9 2.5l3 3l-3 3m-1.5 2h3l-1.5 2m0 0c1.25 0 1.75.75 1.75 1.5c0 1-.75 1.5-1.5 1.5q-1.125 0-1.5-.75m5.5-4.25h3v5h-3Z");
}

.rur0mzb4g {
  d: path("M18.495 9.25A7.5 7.5 0 1 1 12 5.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rur0mzb4g"/><path class="an9xw6bos"/></g>`,
		"fallback": "uix-sharp:forward-30",
	});
}

export default Component;
