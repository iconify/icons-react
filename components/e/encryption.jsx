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
		"content": `<style>.c1wtwhxjt {
  d: path("m12 2.5l8 3v6c0 5-3.5 8.25-8 10c-4.5-1.75-8-5-8-10v-6Z");
}

.h_l-qwbpg {
  d: path("M9 11h6v5H9Zm1 0V9.5a2 2 0 0 1 4 0V11");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="c1wtwhxjt"/><path class="h_l-qwbpg"/></g>`,
		"fallback": "uix-sharp:encryption",
	});
}

export default Component;
