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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jy3t2qbob {
  d: path("M3 5a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.ozxkkf0bx {
  d: path("m14 10 3 3 4.5 -4.5");
}
</style><g class="hntgybcog"><path class="jy3t2qbob"/><path class="ozxkkf0bx"/></g>`,
		"fallback": "iconmind:approval-grant-outline-thin",
	});
}

export default Component;
