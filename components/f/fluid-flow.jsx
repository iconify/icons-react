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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.it6g62bic {
  d: path("M3 11.5c3 0 3-4 6-4s3 4 6 4s3-4 6-4m-18 11c3 0 3-4 6-4s3 4 6 4s3-4 6-4");
}

.qgvnjzqkq {
  d: path("M18.5 5L21 7.5L18.5 10");
}
</style><g class="hntgybcog"><path class="it6g62bic"/><path class="qgvnjzqkq"/></g>`,
		"fallback": "uix:fluid-flow",
	});
}

export default Component;
