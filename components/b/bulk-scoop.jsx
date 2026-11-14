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
		"content": `<style>.nw0jptb0h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 7.5h11V12a4.5 4.5 0 0 1-4.5 4.5h-2A4.5 4.5 0 0 1 3 12Zm11 3h7");
}
</style><path class="nw0jptb0h"/>`,
		"fallback": "uix:bulk-scoop",
	});
}

export default Component;
