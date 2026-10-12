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
		"content": `<style>.cf5bjz6ju {
  d: path("M5.75 14.25a6.25 4 0 0 1 12.5 0Zm-3 0h18.5v7H2.75zm6.75 3.5h5");
}

.wv5f_1brg {
  cx: 12px;
  cy: 5.25px;
  r: 2.5px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="wv5f_1brg"/><path class="cf5bjz6ju"/></g>`,
		"fallback": "iconoven:cashier-sharp",
	});
}

export default Component;
