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
		"content": `<style>.vzugq9hqz {
  d: path("M8 2.75h1.75l.54.84l1.17 1.82l.54.84l.54-.84l1.17-1.82l.54-.84H17l.12.99l.26 2.27l.12.99l.81.59l1.13.82l.81.59v10.25l-.71.71l-.58.58l-.71.71H5.75l-.71-.71l-.58-.58l-.71-.71V9l.81-.59l1.13-.82L6.5 7l.12-.99l.26-2.27l.12-.99z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yxl47qhvd {
  d: path("M8.25 10h7.5v7h-7.5zm-4.5 3.5h1.5m13.5 0h1.5");
}
</style><g class="x2cwu0gfd"><path class="vzugq9hqz"/><path class="yxl47qhvd"/></g>`,
		"fallback": "iconoven:bulletproof-vest-sharp",
	});
}

export default Component;
