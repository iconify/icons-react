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
		"content": `<style>.g-nnt7fyn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20.5C5 16 19 16 21.5 20.5M10 4l1 1.25L12 4l1 1.25L14 4v2a2 2 0 0 1-4 0Zm2 4v9.25M3.5 10.5l1 1.25l1-1.25l1 1.25l1-1.25v2a2 2 0 0 1-4 0Zm2 4V18m11-10l1 1.25l1-1.25l1 1.25l1-1.25v2a2 2 0 0 1-4 0Zm2 4v6M12 15.5c0-1.75 1.5-2.5 3-2.5c0 1.75-1.25 2.5-3 2.5");
}
</style><path class="g-nnt7fyn"/>`,
		"fallback": "uix:flower-bed",
	});
}

export default Component;
