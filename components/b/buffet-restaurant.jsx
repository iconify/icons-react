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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lt13xzbfp {
  d: path("M10.5 6a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m-5 10L7 20h10l1.5-4");
}

.wn6-bq65w {
  d: path("M3.5 16a8.5 8.5 0 0 1 17 0m-18 0h19");
}
</style><g class="hntgybcog"><path class="wn6-bq65w"/><path class="lt13xzbfp"/></g>`,
		"fallback": "uix:buffet-restaurant",
	});
}

export default Component;
