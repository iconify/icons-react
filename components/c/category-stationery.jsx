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
		"content": `<style>.r30ql_twn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5 19l.5-4l11-11L20 7.5l-11 11Zm9-12.5l3.5 3.5");
}
</style><path class="r30ql_twn"/>`,
		"fallback": "uix:category-stationery",
	});
}

export default Component;
