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

.t4zqt8bjf {
  d: path("m9 8.25l.75-1.5H12c1.75 0 3 1 3 2.4c0 2.6-6 3.1-6 6.2c0 1.5 1.25 2.4 3 2.4h2.25l.75-1.5M7.25 10.5h9.5m-9.5 3h9.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="dbgvcxwad"/><path class="t4zqt8bjf"/></g>`,
		"fallback": "iconoven:currency-hryvnia-sharp",
	});
}

export default Component;
