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
		"content": `<style>.pc-1e_biv {
  d: path("M12 5.25v7.25M9.5 7.75h5M2.75 19a9.25 2 0 1 0 18.5 0a9.25 2 0 1 0-18.5 0Z");
}

.w5c3o5b4m {
  cx: 12px;
  cy: 8.75px;
  r: 6px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="w5c3o5b4m"/><path class="pc-1e_biv"/></g>`,
		"fallback": "iconoven:communion-bread-sharp",
	});
}

export default Component;
