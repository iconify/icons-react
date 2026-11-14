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
		"content": `<style>.t1tr6hqyr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14 3.5H6.5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2H14M9.5 12H21m-3-3l3 3l-3 3");
}
</style><path class="t1tr6hqyr"/>`,
		"fallback": "uix:exit-only-sign",
	});
}

export default Component;
