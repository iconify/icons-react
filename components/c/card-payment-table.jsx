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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ut8194bgs {
  d: path("M3.5 8.75h17v13h-17Zm5 0l-1-5L16.25 2l1.25 6.75");
}

.y2iolbczp {
  d: path("M6.5 11.5h11v4h-11Zm2 7.25h.01m3.49 0h.01m3.49 0h.01");
}
</style><g class="ulnmmdpxh"><path class="ut8194bgs"/><path class="y2iolbczp"/></g>`,
		"fallback": "uix-sharp:card-payment-table",
	});
}

export default Component;
