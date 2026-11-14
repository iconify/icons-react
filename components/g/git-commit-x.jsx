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
		"content": `<style>.hxaq--8sz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9.5h4m0 0a4 4 0 1 0 8 0a4 4 0 1 0-8 0m8 0h7M15 15l6 6m0-6l-6 6");
}
</style><path class="hxaq--8sz"/>`,
		"fallback": "uix:git-commit-x",
	});
}

export default Component;
