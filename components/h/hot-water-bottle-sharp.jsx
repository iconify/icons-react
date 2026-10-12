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
		"content": `<style>.wuuyub5xl {
  d: path("M9.25 5.5h5.5v2.45l.75.15l2.75.9l1.25.417V21.25h-15V9.417L5.75 9l2.75-.9l.75-.15v-.7Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xhvny9bnl {
  d: path("m7.5 13.75l2.25-1.5l2.25 1.5l2.25 1.5l2.25-1.5m-9 3.5l2.25-1.5l2.25 1.5l2.25 1.5l2.25-1.5M8.75 5.5V3h6.5v2.5Z");
}
</style><g class="x2cwu0gfd"><path class="wuuyub5xl"/><path class="xhvny9bnl"/></g>`,
		"fallback": "iconoven:hot-water-bottle-sharp",
	});
}

export default Component;
