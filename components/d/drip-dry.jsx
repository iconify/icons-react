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
		"content": `<style>.t-ql4dbex {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 3.5L3 6.5l1.75 4L7 9.5V17h10V9.5l2.25 1l1.75-4l-5.5-3c-1 1.75-6 1.75-7 0Zm.5 17h.01M12 21h.01m2.99-.5h.01");
}
</style><path class="t-ql4dbex"/>`,
		"fallback": "uix-sharp:drip-dry",
	});
}

export default Component;
