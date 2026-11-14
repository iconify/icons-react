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
		"content": `<style>.op7ertb9j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3.5V20m-4.5 0h9M5.5 6h13m-16 7.5l3-7.5l3 7.5a3 3 0 0 1-6 0m13 0l3-7.5l3 7.5a3 3 0 0 1-6 0");
}
</style><path class="op7ertb9j"/>`,
		"fallback": "uix:f1-score",
	});
}

export default Component;
