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
		"content": `<style>.g0hbly4ee {
  d: path("M6.25 10.25v-7.5h11.5v7.5");
}

.lylcpsbcu {
  d: path("M3.25 12.5a2.25 2.25 0 0 1 4.5 0v1.75h8.5V12.5a2.25 2.25 0 0 1 4.5 0V20H3.25v-2ZM6 20v1.25M18 20v1.25");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="g0hbly4ee"/><path class="lylcpsbcu"/></g>`,
		"fallback": "iconoven:armchair-sharp",
	});
}

export default Component;
