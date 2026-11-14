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
		"content": `<style>.ayacvntxn {
  d: path("M10 9q5-.5 8 3q-5 1-8-3ZM5.5 9H10m-4.5 6.5H10");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wcn7cex9m {
  d: path("M5.5 2.5H10v19H5.5ZM10 9q3-4.5 8.5-4.5Q15.5 9 10 9Z");
}
</style><g class="ulnmmdpxh"><path class="wcn7cex9m"/><path class="ayacvntxn"/></g>`,
		"fallback": "uix-sharp:bamboo",
	});
}

export default Component;
