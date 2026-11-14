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
		"content": `<style>.ekf2s55jf {
  d: path("M2.5 15H6l4 2.5h4.25a1.25 1.25 0 0 1 0 2.5H9.5");
}

.iwpviy57k {
  d: path("M2.5 21.5H13l7.25-4.75c1-.75.25-2.25-1-1.75l-3.75 2.5m-4.75-9.25a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0ZM2.25 5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm16-.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ekf2s55jf"/><path class="iwpviy57k"/></g>`,
		"fallback": "uix-sharp:flexible-benefits",
	});
}

export default Component;
