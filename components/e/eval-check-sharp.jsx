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
		"content": `<style>.tej0pbb5m {
  d: path("M3.75 2.75h16.5v18.5H3.75zM7.5 7h9m-9 3.5H13");
}

.vt-z9_ubk {
  d: path("m8 15.5l2.25 2.25l5-5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="tej0pbb5m"/><path class="vt-z9_ubk"/></g>`,
		"fallback": "iconoven:eval-check-sharp",
	});
}

export default Component;
