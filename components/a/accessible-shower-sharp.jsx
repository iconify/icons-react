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
		"content": `<style>.c57dijbcm {
  d: path("M9.5 9.5a3.75 3.75 0 0 1 7.5 0Zm.25 3V14m3.5-1.5V14m3.5-1.5V14");
}

.nl7qlzb0s {
  d: path("M4.75 21.25V2.75h8.5v3");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="nl7qlzb0s"/><path class="c57dijbcm"/></g>`,
		"fallback": "iconoven:accessible-shower-sharp",
	});
}

export default Component;
