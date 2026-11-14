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
		"content": `<style>.nvu45jbhh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12H13m-2.5-8.5H6.25v5.75m0-3H9.5M5.75 15L8 20.5l2.25-5.5M16 9.75h5m-5 4.5h5");
}
</style><path class="nvu45jbhh"/>`,
		"fallback": "uix-sharp:formula-physics",
	});
}

export default Component;
