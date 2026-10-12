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
		"content": `<style>.m6vuywbjz {
  cx: 12px;
  cy: 12.75px;
  r: 2px;
}

.o5rdnfbgn {
  d: path("M6.5 21h11.75v-.75C18.25 18.4 15.44 17 12 17s-6.25 1.4-6.25 3.25V21zM8.75 8.5v-1A2 2 0 0 1 10 3.85a2.5 2.5 0 0 1 4 0a2 2 0 0 1 1.25 3.65v1Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="m6vuywbjz"/><path class="o5rdnfbgn"/></g>`,
		"fallback": "iconoven:avatar-chef-sharp",
	});
}

export default Component;
