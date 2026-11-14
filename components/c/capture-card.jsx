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
		"content": `<style>.hbuvosbzr {
  d: path("M7 5H2.75v14m6.75-3v2.5h9V16m-7.75-5.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Zm2.75 0h.01");
}

.j04xwjzii {
  d: path("M5.5 5h16v11h-16Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="j04xwjzii"/><path class="hbuvosbzr"/></g>`,
		"fallback": "uix-sharp:capture-card",
	});
}

export default Component;
