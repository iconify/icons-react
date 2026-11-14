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
		"content": `<style>.xkg94e6ic {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 16h19v4.5h-19Zm5-12.5h9V16h-9Zm2.75 0V16m3.5-12.5V16M4.5 13v3m15-3v3");
}
</style><path class="xkg94e6ic"/>`,
		"fallback": "uix-sharp:base-plate",
	});
}

export default Component;
