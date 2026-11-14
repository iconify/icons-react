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
		"content": `<style>.ao1pd8bew {
  d: path("M2.5 6q3-3 6 0t6 0t6 0m-18 6q3-3 6 0t6 0t6 0m-18 6q3-3 6 0t6 0t6 0");
}

.e7xy8ib5q {
  d: path("m19.75 3.75l1 2.25l-2.25 1m1.25 2.75l1 2.25l-2.25 1m1.25 2.75l1 2.25l-2.25 1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ao1pd8bew"/><path class="e7xy8ib5q"/></g>`,
		"fallback": "uix-sharp:data-stream",
	});
}

export default Component;
