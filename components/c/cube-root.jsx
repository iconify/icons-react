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
		"content": `<style>.d51_ebb6t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 15h2.5L9 20.25l5-16.5h7.25m-17.75 0h3.25L5 6.25c1.25 0 2.25.5 2.25 1.75S6.25 9.75 5 9.75c-.75 0-1.25-.25-1.5-.5");
}
</style><path class="d51_ebb6t"/>`,
		"fallback": "iconoven:cube-root",
	});
}

export default Component;
