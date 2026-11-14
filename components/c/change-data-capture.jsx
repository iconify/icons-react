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
		"content": `<style>.b8yjc5b8g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9.404 7.245l3.836 10.228a1.5 1.5 0 0 1-1.405 2.027h-7.67a1.5 1.5 0 0 1-1.405-2.027L6.596 7.245a1.5 1.5 0 0 1 2.808 0M16.25 16.5h.01m2.49 0h.01m2.49 0h.01");
}
</style><path class="b8yjc5b8g"/>`,
		"fallback": "uix:change-data-capture",
	});
}

export default Component;
