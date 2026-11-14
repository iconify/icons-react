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
		"content": `<style>.bo6rudb4p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.914 5.522l1.212.471M13.7 11.985l-.23.194m-4.707-1.158l-1.149-.608m1.637 5.403l-.983.852M2.75 8.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m6-4.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m9 3.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m-6.5 5.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m-7.5 6.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0M18 15v6m-3-3h6");
}
</style><path class="bo6rudb4p"/>`,
		"fallback": "uix:constellation-plus",
	});
}

export default Component;
