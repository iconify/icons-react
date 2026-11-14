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
		"content": `<style>.c2v4xob7z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5h6m4 0h4a5 5 0 0 1 5 5v9.5m-11-11q2 2.5 2 3.5a2 2 0 0 1-4 0q0-1 2-3.5m4.75 5q2 2.5 2 3.5a2 2 0 0 1-4 0q0-1 2-3.5");
}
</style><path class="c2v4xob7z"/>`,
		"fallback": "uix:hose-leak",
	});
}

export default Component;
