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
		"content": `<style>.d2zbypb8m {
  d: path("M4.5 18V7A2.25 2.25 0 0 1 9 7v3q1.5-2 3 0q1.5-2 3 0V7a2.25 2.25 0 0 1 4.5 0v11m-17 0h19v3.5h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yb5-eqq7q {
  d: path("M10 18v-3a2 2 0 0 1 4 0v3");
}
</style><g class="ulnmmdpxh"><path class="d2zbypb8m"/><path class="yb5-eqq7q"/></g>`,
		"fallback": "uix-sharp:bouncy-castle",
	});
}

export default Component;
