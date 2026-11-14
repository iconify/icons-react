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
		"content": `<style>.b8_8aacxf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3v18m17-18v18M3.5 8.5h17m-17 7h17m-13-10h1A1.5 1.5 0 0 1 10 7a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 6 7a1.5 1.5 0 0 1 1.5-1.5m0 7h1A1.5 1.5 0 0 1 10 14a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 6 14a1.5 1.5 0 0 1 1.5-1.5m8-4V21m0-9h5m-5 6.5h5");
}
</style><path class="b8_8aacxf"/>`,
		"fallback": "uix:crew-quarters",
	});
}

export default Component;
