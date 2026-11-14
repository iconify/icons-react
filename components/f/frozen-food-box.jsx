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
		"content": `<style>.cq3z0weqp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.625 5h12.75A2.625 2.625 0 0 1 21 7.625v8.75A2.625 2.625 0 0 1 18.375 19H5.625A2.625 2.625 0 0 1 3 16.375v-8.75A2.625 2.625 0 0 1 5.625 5M12 8.5v7m3.031-5.25l-6.062 3.5m6.062 0l-6.062-3.5");
}
</style><path class="cq3z0weqp"/>`,
		"fallback": "uix:frozen-food-box",
	});
}

export default Component;
