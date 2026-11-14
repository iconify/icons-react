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

.wul04bbky {
  d: path("M6 9.5c0 10 4 9 8 9m0-2h4.5v4H14ZM6 6h.01M18.5 18.5H21");
}

.yjqlq4ton {
  d: path("M2.5 6a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Z");
}
</style><g class="ulnmmdpxh"><path class="yjqlq4ton"/><path class="wul04bbky"/></g>`,
		"fallback": "uix-sharp:cable-release",
	});
}

export default Component;
