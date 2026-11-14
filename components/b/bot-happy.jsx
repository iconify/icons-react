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
		"content": `<style>.di9td_-ow {
  d: path("M7 13.5a1.5 1.5 0 0 1 3 0m4 0a1.5 1.5 0 0 1 3 0m-7 3c1 1.5 3 1.5 4 0");
}

.hiws18b4y {
  d: path("M10.25 7h3.5a6.75 6.75 0 0 1 6.75 6.75a6.75 6.75 0 0 1-6.75 6.75h-3.5a6.75 6.75 0 0 1-6.75-6.75A6.75 6.75 0 0 1 10.25 7M12 2.5V7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="hiws18b4y"/><path class="di9td_-ow"/></g>`,
		"fallback": "uix:bot-happy",
	});
}

export default Component;
