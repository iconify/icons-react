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
		"content": `<style>.i1pbp2b1d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 15h4C9 15 10 16 12 16h3a1.5 1.5 0 0 1 0 3h-4m4 0l4.5-2.75A1.75 1.75 0 0 1 21.25 19l-4.75 2.5h-14m7-14a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0");
}
</style><path class="i1pbp2b1d"/>`,
		"fallback": "uix:donate-coin-hand",
	});
}

export default Component;
