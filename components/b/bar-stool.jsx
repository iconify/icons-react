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
		"content": `<style>.r2u-i_h9x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 7a6 2.5 0 1 0 12 0A6 2.5 0 1 0 6 7m6 2.5v10M7 21l5-4l5 4m-9-6.5h8");
}
</style><path class="r2u-i_h9x"/>`,
		"fallback": "uix:bar-stool",
	});
}

export default Component;
