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
		"content": `<style>.t3209accm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 2.5h2A1.75 1.75 0 0 1 10 4.25v15.5a1.75 1.75 0 0 1-1.75 1.75h-2a1.75 1.75 0 0 1-1.75-1.75V4.25A1.75 1.75 0 0 1 6.25 2.5M10 7l9.5 14.5H10M4.5 9H10m-5.5 6H10");
}
</style><path class="t3209accm"/>`,
		"fallback": "uix:buttress",
	});
}

export default Component;
