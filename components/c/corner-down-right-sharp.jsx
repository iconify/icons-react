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
		"content": `<style>.hynzddbgn {
  d: path("m15.5 11l3.75 3.75l-3.75 3.75");
}

.k7h082b9n {
  d: path("M4.25 4.25v10.5h15");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="k7h082b9n"/><path class="hynzddbgn"/></g>`,
		"fallback": "iconoven:corner-down-right-sharp",
	});
}

export default Component;
