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
		"content": `<style>.kr0w97b8k {
  d: path("m15.25 8.75l2 2l2-2");
}

.qp9yqy5sp {
  d: path("M2.5 2.5H10V10H2.5ZM13 17.25a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0Zm-.5-11c2.75 0 4.75 1.75 4.75 4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qp9yqy5sp"/><path class="kr0w97b8k"/></g>`,
		"fallback": "uix-sharp:data-transform",
	});
}

export default Component;
