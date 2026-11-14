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
		"content": `<style>.crtt0obav {
  d: path("M16.75 4.75a2.5 1.5 0 1 0 5 0a2.5 1.5 0 1 0-5 0Z");
}

.hs_3dkbfu {
  d: path("m2.5 15l10-5.75l6-4.75l1 1l-4.75 6L9 21.5m3.5-12.25l2.25 2.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hs_3dkbfu"/><path class="crtt0obav"/></g>`,
		"fallback": "uix-sharp:bolt-cutter",
	});
}

export default Component;
