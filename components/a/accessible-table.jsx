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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uxixqgbeb {
  d: path("M2.5 4.5h19m-17 0V20m15-15.5v6.2m-2.75 2.8h.01m-.01 2.5v2.5H20l1.25 3");
}

.vc9k2zb6j {
  d: path("M18.632 20.375a2.75 2.75 0 1 1-3.323-3.959");
}
</style><g class="ulnmmdpxh"><path class="uxixqgbeb"/><path class="vc9k2zb6j"/></g>`,
		"fallback": "uix-sharp:accessible-table",
	});
}

export default Component;
