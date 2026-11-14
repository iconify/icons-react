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
		"content": `<style>.j7qksfb8c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.793 5.5h11.338a1.75 1.75 0 0 1 1.672 2.265l-2.923 9.5a1.75 1.75 0 0 1-1.673 1.235H4.869a1.75 1.75 0 0 1-1.672-2.265l2.923-9.5A1.75 1.75 0 0 1 7.793 5.5M8.5 9.25h8m-4 0L11.25 15");
}
</style><path class="j7qksfb8c"/>`,
		"fallback": "uix:blocking-marks",
	});
}

export default Component;
