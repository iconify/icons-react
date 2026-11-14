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
		"content": `<style>.it6g62bic {
  d: path("M3 11.5c3 0 3-4 6-4s3 4 6 4s3-4 6-4m-18 11c3 0 3-4 6-4s3 4 6 4s3-4 6-4");
}

.qgvnjzqkq {
  d: path("M18.5 5L21 7.5L18.5 10");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="it6g62bic"/><path class="qgvnjzqkq"/></g>`,
		"fallback": "uix-sharp:fluid-flow",
	});
}

export default Component;
