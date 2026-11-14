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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vjzs7bcxa {
  fill: currentColor;
  d: path("M15 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.x761lkbqw {
  d: path("M13.072 21H4.5c-.6 0-1-.4-1-1c0-3.25 3.25-5.5 7.5-5.5c.789 0 1.543.078 2.249.225M7 7.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0Z");
}
</style><g class="ulnmmdpxh"><path class="x761lkbqw"/><path class="vjzs7bcxa"/></g>`,
		"fallback": "uix-sharp:active-users",
	});
}

export default Component;
