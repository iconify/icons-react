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
		"content": `<style>.jhegndbuk {
  d: path("M9 9.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0ZM6.5 21c0-3.5 2.5-5.5 5.5-5.5q.597 0 1.161.104M14.75 18l2 2L21 15.75");
}

.jl7amebrr {
  d: path("M13.8 21H3V3h18v8.8m0 7.9V21h-1.3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jl7amebrr"/><path class="jhegndbuk"/></g>`,
		"fallback": "uix-sharp:artist-profile-check",
	});
}

export default Component;
