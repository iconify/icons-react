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
		"content": `<style>.soixedczn {
  cx: 12px;
  cy: 17.5px;
  r: 2.75px;
}

.wg_ceq9cx {
  d: path("M2.75 20.25V4.75h18.5v15.5M7.5 4.75v7.5m4.5-7.5v7.5m4.5-7.5v7.5M2.75 8.5h18.5m-18.5 3.75h18.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="wg_ceq9cx"/><circle class="soixedczn"/></g>`,
		"fallback": "iconoven:goal-sharp",
	});
}

export default Component;
