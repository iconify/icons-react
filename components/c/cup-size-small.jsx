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
		"content": `<style>.za3ilvq4n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3.5h12v5a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4ZM15 5h1a2 2 0 0 1 0 4h-1m5.5 6.75c-.5-.75-1.25-1-2.25-1c-1.5 0-2.5.75-2.5 2c0 2.5 5.25 1.25 5.25 3.5C21 21.5 19.75 22 18.25 22C17 22 16 21.5 15.5 20.75");
}
</style><path class="za3ilvq4n"/>`,
		"fallback": "uix:cup-size-small",
	});
}

export default Component;
