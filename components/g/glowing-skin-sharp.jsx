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
		"content": `<style>.j28rvfb_n {
  d: path("m6.75 13l1 1.182l1-1.182m2.5 0l1 1.182l1-1.182M8.5 16.75l1.5 1.125l1.5-1.125m6.5-14l.542 2.708L21.25 6l-2.708.542L18 9.25l-.542-2.708L14.75 6l2.708-.542z");
}

.jg7xt1_6k {
  cx: 10px;
  cy: 14px;
  r: 7.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="jg7xt1_6k"/><path class="j28rvfb_n"/></g>`,
		"fallback": "iconoven:glowing-skin-sharp",
	});
}

export default Component;
