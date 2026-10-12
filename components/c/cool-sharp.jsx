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

.mcz5l_bdx {
  d: path("M6 9h4.75v1.25a2.38 2.38 0 0 1-4.75 0Zm7.25 0H18v1.25a2.38 2.38 0 0 1-4.75 0Zm-2.5 0h2.5M9.5 15.75l2.975 1.275L14.5 15");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="dbgvcxwad"/><path class="mcz5l_bdx"/></g>`,
		"fallback": "iconoven:cool-sharp",
	});
}

export default Component;
