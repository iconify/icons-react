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
		"content": `<style>.fmyt52i2x {
  cx: 8px;
  cy: 18px;
  r: 1.5px;
}

.g-0y4pbch {
  d: path("M7.51 13.89a3.52 3.52 0 0 1-.49-7.01a5.06 5.06 0 0 1 9.38-1.22a3.96 3.96 0 0 1-.53 8.23Z");
}

.ix0sepbgl {
  cx: 12px;
  cy: 19.5px;
  r: 1.5px;
}

.s-dxozb8l {
  cx: 16px;
  cy: 18px;
  r: 1.5px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="g-0y4pbch"/><circle class="fmyt52i2x"/><circle class="ix0sepbgl"/><circle class="s-dxozb8l"/></g>`,
		"fallback": "iconoven:hail-sharp",
	});
}

export default Component;
