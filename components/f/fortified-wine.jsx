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
		"content": `<style>.h2-_3hpuc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 3.5h10V8A5 5 0 0 1 7 8Zm5 9.5v8m-4 0h8M7 6.25h10");
}
</style><path class="h2-_3hpuc"/>`,
		"fallback": "uix:fortified-wine",
	});
}

export default Component;
