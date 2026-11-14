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
		"content": `<style>.khmh6acee {
  d: path("M10.25 3.75L12 5l-1.75 1.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x-d3mlb0q {
  d: path("M10.5 9H14v3.75L17 14a1.75 1.75 0 0 1 1.25 1.75V17H10.5Zm-1 11H19a2 2 0 0 0 2-2m-9-1v3m4.5-3v3m-13-3A9 9 0 0 1 12 5");
}
</style><g class="ulnmmdpxh"><path class="x-d3mlb0q"/><path class="khmh6acee"/></g>`,
		"fallback": "uix-sharp:figure-skater-spin",
	});
}

export default Component;
