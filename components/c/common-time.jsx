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
		"content": `<style>.mwzooerip {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.5h7.9m6.1 0h5m-19 4.25h2.9m14.9 0h1.2M2.5 12h1.9m5.4 0h11.7m-19 4.25h2.9m14.9 0h1.2m-19 4.25h7.9m6.1 0h5m-4-13.25a6.25 6.25 0 1 0 0 9.5");
}
</style><path class="mwzooerip"/>`,
		"fallback": "uix:common-time",
	});
}

export default Component;
