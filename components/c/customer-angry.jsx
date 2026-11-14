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
		"content": `<style>.agnfpj1hi {
  d: path("M5.5 9a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0Zm-2 12.5c0-2 3.75-3.25 8.5-3.25s8.5 1.25 8.5 3.25M8.75 7.25l2 1m4.5-1l-2 1");
}

.nq2i17p9o {
  d: path("M10 12.5q2-1.5 4 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="agnfpj1hi"/><path class="nq2i17p9o"/></g>`,
		"fallback": "uix-sharp:customer-angry",
	});
}

export default Component;
