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
		"content": `<style>.dov3-6b_x {
  d: path("M2.5 4.5H15v15H2.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yh8k4r5br {
  d: path("M5 12a3.75 3.75 0 1 0 7.5 0A3.75 3.75 0 1 0 5 12Zm3.75 0h.01m8.74-3.5h4m-1.75-1.75L21.5 8.5l-1.75 1.75M17.5 15.5h4m-1.75-1.75l1.75 1.75l-1.75 1.75");
}
</style><g class="ulnmmdpxh"><path class="dov3-6b_x"/><path class="yh8k4r5br"/></g>`,
		"fallback": "uix-sharp:heat-pump-outdoor",
	});
}

export default Component;
