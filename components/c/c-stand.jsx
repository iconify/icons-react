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
		"content": `<style>.c30uksb0b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 4.5v17m0-6l-4.5 6m4.5-6l4.5 6M8 8h3.5m0 0a5 5 0 1 0 10 0a5 5 0 1 0-10 0M8 8h.01");
}
</style><path class="c30uksb0b"/>`,
		"fallback": "uix:c-stand",
	});
}

export default Component;
