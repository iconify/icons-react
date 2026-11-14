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
		"content": `<style>.n--5wxb8b {
  d: path("M6 7.5q1.5-1.5 3 0t3 0t3 0t3 0M6 12q1.5-1.5 3 0t3 0t3 0t3 0M6 16.5q1.5-1.5 3 0t3 0t3 0t3 0");
}

.o0uxpabcc {
  d: path("M2.5 3.5h19v17h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="o0uxpabcc"/><path class="n--5wxb8b"/></g>`,
		"fallback": "uix-sharp:corrugated-board",
	});
}

export default Component;
