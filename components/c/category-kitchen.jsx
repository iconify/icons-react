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
		"content": `<style>.axm573yuv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 3v5a2 2 0 0 0 2 2v11m2-18v5M7 3v5m10 13V3c-2.5 1.5-3 5-3 9h3");
}
</style><path class="axm573yuv"/>`,
		"fallback": "uix:category-kitchen",
	});
}

export default Component;
