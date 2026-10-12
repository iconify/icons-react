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
		"content": `<style>.l3wzh74dd {
  d: path("M9.25 10.25h5.5L14 11.5v1.455l2 2.545H8l2-2.545V11.5ZM5 18.5h14v2.75H5z");
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
</style><g class="x2cwu0gfd"><circle class="wv5f_1brg"/><path class="l3wzh74dd"/></g>`,
		"fallback": "iconoven:chess-pawn-sharp",
	});
}

export default Component;
