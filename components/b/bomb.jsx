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
		"content": `<style>.u_nmsbcje {
  d: path("M3.5 14a7 7 0 1 0 14 0a7 7 0 1 0-14 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v7qoo6big {
  d: path("M15.5 9c.5-1.25.75-2 1.5-2.5M19.75 2v3.5M18 3.75h3.5M6.741 12.632a4 4 0 0 1 2.391-2.391");
}
</style><g class="ulnmmdpxh"><path class="u_nmsbcje"/><path class="v7qoo6big"/></g>`,
		"fallback": "uix-sharp:bomb",
	});
}

export default Component;
