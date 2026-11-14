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
		"content": `<style>.ntoqfgnpp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 4h16l-8 9Zm8 9v7.5m-4 0h8M6.75 7h10.5");
}
</style><path class="ntoqfgnpp"/>`,
		"fallback": "uix:cocktail",
	});
}

export default Component;
