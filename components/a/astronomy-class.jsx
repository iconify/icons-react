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
		"content": `<style>.nvebvjbad {
  d: path("M8 12a4 4 0 1 0 8 0a4 4 0 1 0-8 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xcgk2tifr {
  d: path("M2.5 12a9.5 3 0 1 0 19 0a9.5 3 0 1 0-19 0ZM19 5h.01M5 19h.01");
}
</style><g class="ulnmmdpxh"><path class="nvebvjbad"/><path class="xcgk2tifr"/></g>`,
		"fallback": "uix-sharp:astronomy-class",
	});
}

export default Component;
