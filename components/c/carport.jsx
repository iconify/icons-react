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
		"content": `<style>.ee6z5r7mu {
  d: path("M2.5 3h19v2h-19Zm1 2v16.5M20.5 5v16.5M6.5 18H6v-2.5a1 1 0 0 1 1-1h1.25l1.75-3h4l1.75 3H17a1 1 0 0 1 1 1V18h-.5m-7 0h3");
}

.imub2hb2y {
  d: path("M6.75 18a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm7 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ee6z5r7mu"/><path class="imub2hb2y"/></g>`,
		"fallback": "uix-sharp:carport",
	});
}

export default Component;
