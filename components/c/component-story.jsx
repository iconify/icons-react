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
		"content": `<style>.fti4mbcuq {
  d: path("M5 19V5a2.5 2.5 0 0 1 2.5-2.5h12v19h-12A2.5 2.5 0 0 1 5 19Z");
}

.n_npagbzt {
  fill: currentColor;
  d: path("m12.25 5l1.5 1.5l-1.5 1.5l-1.5-1.5Zm0 6l1.5 1.5l-1.5 1.5l-1.5-1.5Zm-3-3l1.5 1.5l-1.5 1.5l-1.5-1.5Zm6 0l1.5 1.5l-1.5 1.5l-1.5-1.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.up54fvb6t {
  d: path("M5 19a2.5 2.5 0 0 1 2.5-2.5h12");
}
</style><g class="ulnmmdpxh"><path class="fti4mbcuq"/><path class="up54fvb6t"/><path class="n_npagbzt"/></g>`,
		"fallback": "uix-sharp:component-story",
	});
}

export default Component;
