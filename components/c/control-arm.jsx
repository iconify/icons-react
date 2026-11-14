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
		"content": `<style>.e0aeuid6j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m0 13a2 2 0 1 0 4 0a2 2 0 1 0-4 0m15-6.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-13-4.5v9m1.75 1.25l11.5-5m-11.5-6.5l11.5 5");
}
</style><path class="e0aeuid6j"/>`,
		"fallback": "uix:control-arm",
	});
}

export default Component;
