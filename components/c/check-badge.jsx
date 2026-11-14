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
		"content": `<style>.csj1iib5q {
  d: path("m21.5 12l-2.25 3l-.5 3.75l-3.75.5l-3 2.25l-3-2.25l-3.75-.5l-.5-3.75l-2.25-3l2.25-3l.5-3.75L9 4.75l3-2.25l3 2.25l3.75.5l.5 3.75Z");
}

.rl0hurbau {
  d: path("m8.5 12l2.5 2.5l4.5-5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="csj1iib5q"/><path class="rl0hurbau"/></g>`,
		"fallback": "uix-sharp:check-badge",
	});
}

export default Component;
