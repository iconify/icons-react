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
		"content": `<style>.l91z3pmai {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5c0 2.5 4.5 4 4.5 8a4.5 4.5 0 0 1-9 0c0-2.5 1.5-4 2-5c.75 1.25 1.25 1.75 1.5 2.25c.25-1.75.25-3.5 1-5.25M2.5 17.75h19c-.5 2.75-18.5 2.75-19 0");
}
</style><path class="l91z3pmai"/>`,
		"fallback": "uix:calorie-count",
	});
}

export default Component;
