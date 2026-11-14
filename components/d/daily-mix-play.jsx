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
		"content": `<style>.b8cn7ytma {
  d: path("M6.5 4.5H19a2 2 0 0 1 2 2V16M8.5 10.5l5.25 3l-5.25 3Z");
}

.le-f4ibty {
  d: path("M3 7.5h15v12H3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="le-f4ibty"/><path class="b8cn7ytma"/></g>`,
		"fallback": "uix-sharp:daily-mix-play",
	});
}

export default Component;
