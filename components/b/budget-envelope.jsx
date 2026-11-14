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
		"content": `<style>.ntwy5xssp {
  d: path("M2.5 8.5h19v12h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xk2xo0boc {
  d: path("m2.5 9l9.5 5.5L21.5 9M6 8.5v-4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v4");
}
</style><g class="ulnmmdpxh"><path class="ntwy5xssp"/><path class="xk2xo0boc"/></g>`,
		"fallback": "uix-sharp:budget-envelope",
	});
}

export default Component;
