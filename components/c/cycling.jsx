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
		"content": `<style>.hcqb3vbiu {
  d: path("M2 17a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm13 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0ZM12 4a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.njm63fbdb {
  d: path("M5.5 17L9 11l6 .5l3.5 5.5M9 11l4-3.5l2.5 3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hcqb3vbiu"/><path class="njm63fbdb"/></g>`,
		"fallback": "uix-sharp:cycling",
	});
}

export default Component;
