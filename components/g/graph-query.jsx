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
		"content": `<style>.wsg-tdbiy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 5.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m9 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m-9 9a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m5-9h4M5.5 8v4m5.25 3a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0M18 18l3.5 3.5");
}
</style><path class="wsg-tdbiy"/>`,
		"fallback": "uix:graph-query",
	});
}

export default Component;
