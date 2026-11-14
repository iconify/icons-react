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
		"content": `<style>.cnvgufbrz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.329 3.307a9 9 0 0 1 6.364 6.364m0 4.658a9 9 0 0 1-6.364 6.364m-4.658 0a9 9 0 0 1-6.364-6.364m0-4.658a9 9 0 0 1 6.364-6.364M10 8l6.5 4l-6.5 4Z");
}
</style><path class="cnvgufbrz"/>`,
		"fallback": "uix-sharp:dry-run",
	});
}

export default Component;
