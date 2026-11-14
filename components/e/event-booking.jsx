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
		"content": `<style>.devj7tbyk {
  d: path("M13.8 21H3V4.5h17v8.3m0 7.9v.3h-.3M3 9.5h17m-12.5-7v4m8-4v4");
}

.e9fltbcec {
  d: path("m14.75 18l2 2L21 15.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="devj7tbyk"/><path class="e9fltbcec"/></g>`,
		"fallback": "uix-sharp:event-booking",
	});
}

export default Component;
