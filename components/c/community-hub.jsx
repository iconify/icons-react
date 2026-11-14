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
		"content": `<style>.c2mo6qbhj {
  d: path("M9 11h6a1.5 1.5 0 0 1 1.5 1.5v2A1.5 1.5 0 0 1 15 16h-4l-1.5 1.75V16H9a1.5 1.5 0 0 1-1.5-1.5v-2A1.5 1.5 0 0 1 9 11Z");
}

.ke58ybbzd {
  d: path("M3.5 10.5L12 3.25l8.5 7.25v10h-17Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ke58ybbzd"/><path class="c2mo6qbhj"/></g>`,
		"fallback": "uix-sharp:community-hub",
	});
}

export default Component;
