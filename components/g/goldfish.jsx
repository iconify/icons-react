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
		"content": `<style>.ecr4yb0fm {
  d: path("M3.5 13c0-4 3-6 6.5-6c3 0 5.5 2 6.5 4.5l4.5-4q-1.5 5.5 0 11l-4.5-4C15.5 17 13 19 10 19c-3.5 0-6.5-2-6.5-6Z");
}

.t3xmgm3ui {
  d: path("M7.5 7.5c1-2.5 4-3.25 6 .25M7 11.5h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ecr4yb0fm"/><path class="t3xmgm3ui"/></g>`,
		"fallback": "uix-sharp:goldfish",
	});
}

export default Component;
