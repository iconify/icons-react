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
		"content": `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.k5ckrtncc {
  d: path("m15.69 8.68l-1.88 4.14l-.31.68l-.68.31l-4.14 1.88L8 16l.31-.68l1.88-4.14l.31-.68l.68-.31l4.14-1.88L16 8z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="dbgvcxwad"/><path class="k5ckrtncc"/></g>`,
		"fallback": "iconoven:compass-off-sharp",
	});
}

export default Component;
