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
		"content": `<style>.ogjz2_eke {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3.5c-5 0-9 3.75-9 8.5s4 8.5 8.5 8.5c1.5 0 2.25-1 1.75-2.25s.25-2.5 1.75-2.5h2c2.25 0 4-1.75 4-4c0-4.5-4-8.25-9-8.25M8 8.75h.01M7.5 14h.01m4.99-2.5l8-8");
}
</style><path class="ogjz2_eke"/>`,
		"fallback": "uix:artist-palette-brush",
	});
}

export default Component;
