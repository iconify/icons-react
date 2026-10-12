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
		"content": `<style>.b_l1l_b8b {
  d: path("m6 18l3.5-7h5.75m-3.5 7L9.5 11m2.25 7l3.5-7M18 18L14.25 7.25h-2M8 8.75h3m6.75-4.25h3.5v3.25h-3.5z");
}

.j-97t6czk {
  cx: 18px;
  cy: 18px;
  r: 3.25px;
}

.rslc-9wef {
  cx: 6px;
  cy: 18px;
  r: 3.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="rslc-9wef"/><circle class="j-97t6czk"/><path class="b_l1l_b8b"/></g>`,
		"fallback": "iconoven:delivery-bike-sharp",
	});
}

export default Component;
