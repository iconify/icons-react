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
		"content": `<style>.na8us16sm {
  d: path("M8 11h8v6H8z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xtlbptbid {
  d: path("M5.5 5.75h13l1.25 14l.313 1.532l-1.563-.032h-13l-1.563.032l.313-1.532Zm0 0l1-3h11l1 3");
}
</style><g class="x2cwu0gfd"><path class="xtlbptbid"/><path class="na8us16sm"/></g>`,
		"fallback": "iconoven:cement-bag-sharp",
	});
}

export default Component;
