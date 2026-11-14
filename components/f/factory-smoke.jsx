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
		"content": `<style>.tis5x9brb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 20.5V12l4.5-3v3L12 9v3h3.5V7.5h4v13ZM14.25 4.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m4.25-.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M6 16h2m2.5 0h2");
}
</style><path class="tis5x9brb"/>`,
		"fallback": "uix:factory-smoke",
	});
}

export default Component;
