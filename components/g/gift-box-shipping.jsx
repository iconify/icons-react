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
		"content": `<style>.ii_5gqsqp {
  d: path("M3 7h18v3.5H3Zm9 0v13m0-13c-2-3.5-5-3.5-4-1c.5 1 2 1 4 1Zm0 0c2-3.5 5-3.5 4-1c-.5 1-2 1-4 1Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xvcfkmbtk {
  d: path("M4 10h16v10H4Z");
}
</style><g class="ulnmmdpxh"><path class="xvcfkmbtk"/><path class="ii_5gqsqp"/></g>`,
		"fallback": "uix-sharp:gift-box-shipping",
	});
}

export default Component;
