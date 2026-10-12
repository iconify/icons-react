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

.zwfmmldai {
  d: path("M8.75 6.75v10.5h2.5a5.25 5.25 0 0 0 0-10.5h-2.5m-2.5 3.75h11.5m-11.5 3h11.5");
}
</style><g class="x2cwu0gfd"><circle class="dbgvcxwad"/><path class="zwfmmldai"/></g>`,
		"fallback": "iconoven:currency-dirham-sharp",
	});
}

export default Component;
