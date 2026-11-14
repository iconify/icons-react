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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vo3jprf0r {
  d: path("M3 10h18v8H3Zm4 0V3.5h10V10");
}

.vyq8nubpa {
  d: path("M7 15h10v5.5H7Z");
}
</style><g class="ulnmmdpxh"><path class="vo3jprf0r"/><path class="vyq8nubpa"/></g>`,
		"fallback": "uix-sharp:category-printers",
	});
}

export default Component;
