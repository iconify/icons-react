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
		"content": `<style>.bpqvdzbef {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 13.5C10 12.25 7 12 3 12v7.5c4 0 7 .25 9 1.5c2-1.25 5-1.5 9-1.5V12c-4 0-7 .25-9 1.5m0 0V21M5 5.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m9 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}
</style><path class="bpqvdzbef"/>`,
		"fallback": "uix:book-club",
	});
}

export default Component;
