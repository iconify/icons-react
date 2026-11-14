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
		"content": `<style>.t89n9scbd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 8.5h18L19 17H5Zm4.5 0V7a4.5 4.5 0 0 1 9 0v1.5M6.5 20h.01M10 20h.01M14 20h.01m3.49 0h.01");
}
</style><path class="t89n9scbd"/>`,
		"fallback": "uix:basket-rolling",
	});
}

export default Component;
