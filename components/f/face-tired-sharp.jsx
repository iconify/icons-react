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
		"content": `<style>.cb80qybgh {
  d: path("M7.5 8.5L10 10l-2.5 1.5m9-3L14 10l2.5 1.5M9 17c0-1.75 1.35-3 3-3s3 1.25 3 3v1H9z");
}

.dbgvcxwad {
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
</style><g class="x2cwu0gfd"><circle class="dbgvcxwad"/><path class="cb80qybgh"/></g>`,
		"fallback": "iconoven:face-tired-sharp",
	});
}

export default Component;
