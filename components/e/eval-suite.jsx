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
		"content": `<style>.g0natruzh {
  d: path("M8.5 2.5h7V6h-7Zm-1 7.5l1.25 1.25L11 9m-3.5 5l1.25 1.25L11 13m-3.5 5l1.25 1.25L11 17m2.75-7h3m-3 4h3m-3 4h3");
}

.qpofv-b0o {
  d: path("M4.5 4h15v17.5h-15Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qpofv-b0o"/><path class="g0natruzh"/></g>`,
		"fallback": "uix-sharp:eval-suite",
	});
}

export default Component;
