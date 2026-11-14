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
		"content": `<style>.u1aogdbmj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 3v11a6 6 0 0 0 12 0V3M3 6l7.5 3M3 10.5l7.5 3");
}
</style><path class="u1aogdbmj"/>`,
		"fallback": "uix:electromagnet",
	});
}

export default Component;
