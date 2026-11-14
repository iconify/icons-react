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
		"content": `<style>.pb3nqwbbl {
  d: path("M4.75 5.75h14.5v7.5H4.75ZM6 16v5.5M18 16v5.5");
}

.pkfl3r-oe {
  d: path("M2 3h20v13H2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pkfl3r-oe"/><path class="pb3nqwbbl"/></g>`,
		"fallback": "uix-sharp:digital-noticeboard",
	});
}

export default Component;
