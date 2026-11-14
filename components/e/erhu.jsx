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
		"content": `<style>.z9m853byt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 2.5V15m-3 3a3 3 0 1 0 6 0a3 3 0 1 0-6 0M6 4.5h2.5M6 7.5h2.5m5 13.5q6-8 3.5-17.5");
}
</style><path class="z9m853byt"/>`,
		"fallback": "uix:erhu",
	});
}

export default Component;
