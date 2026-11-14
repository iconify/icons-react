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
		"content": `<style>.ehz4xh3jc {
  d: path("M7.5 21.5L10 9l2.5 12.5m-7-18a6 6 0 0 0 0 8m9-8a6 6 0 0 1 0 8m.25 6.5l2 2L21 15.75");
}

.g2c0pdi9p {
  d: path("M8.5 7.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="g2c0pdi9p"/><path class="ehz4xh3jc"/></g>`,
		"fallback": "uix:antenna-check",
	});
}

export default Component;
