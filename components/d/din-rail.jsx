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
		"content": `<style>.wm2thdc0v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 5h4v11h-4ZM10 5h4v11h-4Zm6.75 0h4v11h-4ZM2.5 16h19v3.5h-19Z");
}
</style><path class="wm2thdc0v"/>`,
		"fallback": "uix-sharp:din-rail",
	});
}

export default Component;
