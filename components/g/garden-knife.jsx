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
		"content": `<style>.f-vrp6bql {
  d: path("M9 12.5c3.5-3.5 7.5-8 10.5-8C21 4.5 21.5 6 21 8c-1.5-.75-3.5.25-5.5 2.5l-4 4.5Z");
}

.jhwnxyams {
  d: path("m9 12.5l-5.25 5.25a1.75 1.75 0 0 0 2.5 2.5L11.5 15");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="f-vrp6bql"/><path class="jhwnxyams"/></g>`,
		"fallback": "uix-sharp:garden-knife",
	});
}

export default Component;
