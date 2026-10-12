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
		"content": `<style>.d6f-nvbcl {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 6.75H17l.18 1.49l1.39 11.52l.18 1.49H5.25l.18-1.49L6.82 8.24L7 6.75zm1 0v-4h5v4");
}

.tg2oxlu1e {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 10.75h.01m3.99 0h.01m-4.26 3.5h.01m4.49 0h.01m-4.76 3.5h.01m4.99 0h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="d6f-nvbcl"/><path class="tg2oxlu1e"/></g>`,
		"fallback": "iconoven:grater-sharp",
	});
}

export default Component;
