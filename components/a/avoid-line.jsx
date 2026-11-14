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
		"content": `<style>.j6y-ey-rb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0m4 0h2.4m6.2 0h2.4m0 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M16 3.5l-8 17");
}
</style><path class="j6y-ey-rb"/>`,
		"fallback": "uix:avoid-line",
	});
}

export default Component;
