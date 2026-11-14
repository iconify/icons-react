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
		"content": `<style>.konqi2bja {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 12V9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3M5.5 12h13a2.5 2.5 0 0 1 2.5 2.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 14.5A2.5 2.5 0 0 1 5.5 12M5 17v3m14-3v3");
}
</style><path class="konqi2bja"/>`,
		"fallback": "uix:category-home-furniture",
	});
}

export default Component;
