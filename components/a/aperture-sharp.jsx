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

.p3v4rno7r {
  d: path("m15.95 12.09l-5.24 9.07m3.19-5.7H3.42m6.53-.08L4.71 6.3m3.34 5.61l5.24-9.07m-3.19 5.7h10.48m-6.53.08l5.24 9.08");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="dbgvcxwad"/><path class="p3v4rno7r"/></g>`,
		"fallback": "iconoven:aperture-sharp",
	});
}

export default Component;
