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
		"content": `<style>.ngxwksboe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m19.718 4.282l-8.839 8.839M8.757 11L13 15.243a2 2 0 0 1 0 2.828a2 2 0 0 1-2.828 0l-4.243-4.243a2 2 0 0 1 0-2.828a2 2 0 0 1 2.828 0");
}
</style><path class="ngxwksboe"/>`,
		"fallback": "uix:curling-brush",
	});
}

export default Component;
