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
		"content": `<style>.b5f8ycbpi {
  d: path("M7.75 9h3.5v3.5h-3.5Zm3 6.25h3.5v3.5h-3.5Z");
}

.rv6jirbav {
  d: path("M4.5 5.5h15l-1.5 16H6Zm10 7l3-10");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rv6jirbav"/><path class="b5f8ycbpi"/></g>`,
		"fallback": "uix-sharp:iced-tea",
	});
}

export default Component;
