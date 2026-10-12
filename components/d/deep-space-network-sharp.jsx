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
		"content": `<style>.czbtf4qze {
  d: path("m5 7.5l8 8a5.66 5.66 0 0 1-8-8Z");
}

.no3v0bckx {
  d: path("m9 11.5l3-3M6 21.25l3-4.1l3 4.1m1.03-15.57l1.311.479l.479 1.311m-.77-4.61a6 6 0 0 1 3.59 3.59");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="czbtf4qze"/><path class="no3v0bckx"/></g>`,
		"fallback": "iconoven:deep-space-network-sharp",
	});
}

export default Component;
