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
		"content": `<style>.rjyl4u2tc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 9.5a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0m9-3.25h.01m2.74 1.25h.01M13 9.25h.01M4.5 20h15M7 17.5L4.5 20L7 22");
}
</style><path class="rjyl4u2tc"/>`,
		"fallback": "uix:ball-return",
	});
}

export default Component;
