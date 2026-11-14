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
		"content": `<style>.e7bx2db1k {
  d: path("M10 8q1-1.25 2 0t2 0");
}

.rd2u59dlh {
  d: path("M3 4h18l-7 8.5V19l-4 2.5v-9Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rd2u59dlh"/><path class="e7bx2db1k"/></g>`,
		"fallback": "uix-sharp:dryer-lint-filter",
	});
}

export default Component;
