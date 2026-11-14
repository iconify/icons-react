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
		"content": `<style>.j3afzccsl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.202 10h11.596a2.625 2.625 0 0 1 2.574 3.14l-.95 4.75A2.625 2.625 0 0 1 16.848 20H7.152a2.625 2.625 0 0 1-2.574-2.11l-.95-4.75A2.625 2.625 0 0 1 6.202 10M7.5 10V8.5a4.5 4.5 0 0 1 9 0V10m-8 3v4m3.5-4v4m3.5-4v4");
}
</style><path class="j3afzccsl"/>`,
		"fallback": "uix:basket-wire",
	});
}

export default Component;
