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
		"content": `<style>.eqv27vbly {
  d: path("M2.5 8.5H19v10");
}

.ipbwoz2sr {
  d: path("M5 5.5v10h16.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ipbwoz2sr"/><path class="eqv27vbly"/></g>`,
		"fallback": "uix-sharp:crop-landscape",
	});
}

export default Component;
