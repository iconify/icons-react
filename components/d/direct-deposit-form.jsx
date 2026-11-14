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
		"content": `<style>.bb-g8gb6u {
  d: path("M11.9 21.5H4.5v-19h15v10.1M8 7h8m-8 3.5h8M8 14h3");
}

.shr0a7bsk {
  d: path("M15.5 17.25L18 15l2.5 2.25m-5.75 0h6.5m-4.75 0V21m3-3.75V21m-4.75.25h6.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bb-g8gb6u"/><path class="shr0a7bsk"/></g>`,
		"fallback": "uix-sharp:direct-deposit-form",
	});
}

export default Component;
