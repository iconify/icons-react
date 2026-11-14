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
		"content": `<style>.a6k62accz {
  d: path("M18 16.5V18l1.25 1");
}

.d0jfembef {
  d: path("M14.75 18a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zyt2czbux {
  d: path("M13.1 21.5H4.5v-19h15v9.6M8 7h8m-8 4h8m-8 4h3");
}
</style><g class="ulnmmdpxh"><path class="zyt2czbux"/><path class="d0jfembef"/><path class="a6k62accz"/></g>`,
		"fallback": "uix-sharp:contract-expired",
	});
}

export default Component;
