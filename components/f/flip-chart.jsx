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
		"content": `<style>.x3quevbqg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.625 3h8.75A2.625 2.625 0 0 1 19 5.625v6.75A2.625 2.625 0 0 1 16.375 15h-8.75A2.625 2.625 0 0 1 5 12.375v-6.75A2.625 2.625 0 0 1 7.625 3M12 14v7.5m0-4l-5 4m5-4l5 4M8 7h8m-8 3.5h5");
}
</style><path class="x3quevbqg"/>`,
		"fallback": "uix:flip-chart",
	});
}

export default Component;
