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
		"content": `<style>.x_h19-dau {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 21.5v-11c-1.25-1-1-3 .5-3.5l.25-3.5q.5-1 1 0l1 2.5c.75-1 2.25-.75 2.75.25l5 2.25a1.75 1.75 0 0 1-.5 3.25l-4 .5v9.25ZM12.25 9h.01");
}
</style><path class="x_h19-dau"/>`,
		"fallback": "uix-sharp:alpaca",
	});
}

export default Component;
