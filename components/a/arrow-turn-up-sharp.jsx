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
		"content": `<style>.fti7nl0tw {
  d: path("M6.25 19.75a8 8 0 0 0 8-8v-7");
}

.i0iuipxhm {
  d: path("m10.5 8.5l3.75-3.75L18 8.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="fti7nl0tw"/><path class="i0iuipxhm"/></g>`,
		"fallback": "iconoven:arrow-turn-up-sharp",
	});
}

export default Component;
