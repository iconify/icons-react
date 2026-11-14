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
		"content": `<style>.w87d8ybhy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 4h-.5a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2H9m6-16h.5a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2H15");
}
</style><path class="w87d8ybhy"/>`,
		"fallback": "uix:code-braces",
	});
}

export default Component;
