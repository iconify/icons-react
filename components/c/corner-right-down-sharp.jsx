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
		"content": `<style>.grlcs-vwr {
  d: path("m11 15.5l3.75 3.75l3.75-3.75");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zatjtebrs {
  d: path("M4.25 4.25h10.5v15");
}
</style><g class="x2cwu0gfd"><path class="zatjtebrs"/><path class="grlcs-vwr"/></g>`,
		"fallback": "iconoven:corner-right-down-sharp",
	});
}

export default Component;
