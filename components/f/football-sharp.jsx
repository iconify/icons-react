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

.tke6lebvl {
  d: path("m12.61 8.94l2.11 1.54l.61.44l-.23.71l-.81 2.49l-.23.71H9.94l-.23-.71l-.81-2.49l-.23-.71l.61-.44l2.11-1.54l.61-.44zM12 6.75V4.5m4.99 5.88l2.14-.7m-4.04 6.57l1.32 1.82m-7.5-1.82l-1.32 1.82m-.58-7.69l-2.14-.7");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="dbgvcxwad"/><path class="tke6lebvl"/></g>`,
		"fallback": "iconoven:football-sharp",
	});
}

export default Component;
