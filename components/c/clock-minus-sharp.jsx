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

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yxps5kb0y {
  d: path("M12 7.25V12l3 2");
}
</style><g class="x2cwu0gfd"><circle class="dbgvcxwad"/><path class="yxps5kb0y"/></g>`,
		"fallback": "iconoven:clock-minus-sharp",
	});
}

export default Component;
