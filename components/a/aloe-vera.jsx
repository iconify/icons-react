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
		"content": `<style>.w8fjlibnm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 20.5c-1.5-5.5-1-12 0-17c1 5 1.5 11.5 0 17m-1 0c-3-2-5.5-7-7-12c3 2.5 6 6.5 7 12m2 0c3-2 5.5-7 7-12c-3 2.5-6 6.5-7 12");
}
</style><path class="w8fjlibnm"/>`,
		"fallback": "uix:aloe-vera",
	});
}

export default Component;
