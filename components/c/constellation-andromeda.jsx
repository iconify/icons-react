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
		"content": `<style>.bilg3pqsd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.25 18.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m4.25-6a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m4.25 3a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m4.25-7a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m4.25-3a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}
</style><path class="bilg3pqsd"/>`,
		"fallback": "uix:constellation-andromeda",
	});
}

export default Component;
