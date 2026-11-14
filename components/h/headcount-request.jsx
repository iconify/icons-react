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
		"content": `<style>.mshs91avi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 21.5V18L2.5 15a1.25 1.25 0 0 1 2-1.5l.5.5V6.5a1.25 1.25 0 0 1 2.5 0V11V5A1.25 1.25 0 0 1 10 5v6v-4a1.25 1.25 0 0 1 2.5 0v9c0 1.75-1 2.75-2 3v2.5M18.75 4a1.375 1.375 0 0 1 2.75 0v9a1.25 1.25 0 0 1-1.25 1.25H16.5A1.25 1.25 0 0 1 15.25 13a1.25 1.25 0 0 1 1.25-1.25h2.25Zm-.5 10.25V17m-3 2l3-2l3 2m-6 2.75h.01m5.99 0h.01");
}
</style><path class="mshs91avi"/>`,
		"fallback": "uix:headcount-request",
	});
}

export default Component;
