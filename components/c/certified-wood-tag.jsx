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
		"content": `<style>.ficfidjiy {
  d: path("M8.5 2.5h7L19 6v14a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 20V6Z");
}

.p5dqjbpfy {
  d: path("M10.5 6.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm-2 7.75L11 17l4.5-5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ficfidjiy"/><path class="p5dqjbpfy"/></g>`,
		"fallback": "uix-sharp:certified-wood-tag",
	});
}

export default Component;
