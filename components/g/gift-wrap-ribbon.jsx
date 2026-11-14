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
		"content": `<style>.d2tx-bb_e {
  d: path("M2.5 9.5a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0Z");
}

.khy1y64ud {
  d: path("M6.5 9.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0ZM9 16c3.5 0 5 1 6 2.5c1 1.75 3.75 2.75 5.25 1S20.5 15 18.5 15c-1.75 0-2.25 2-.75 2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="d2tx-bb_e"/><path class="khy1y64ud"/></g>`,
		"fallback": "uix-sharp:gift-wrap-ribbon",
	});
}

export default Component;
