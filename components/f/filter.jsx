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
		"content": `<style>.iv2civ-go {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 3.75h14.5a1 1 0 0 1 .78 1.63l-5.78 7.12v5.9a1 1 0 0 1-.55.9l-2.5 1.25a1 1 0 0 1-1.45-.9V12.5L3.97 5.38a1 1 0 0 1 .78-1.63m2.5 3.5h9.5");
}
</style><path class="iv2civ-go"/>`,
		"fallback": "iconoven:filter",
	});
}

export default Component;
