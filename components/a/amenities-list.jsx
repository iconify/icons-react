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
		"content": `<style>.re3nbbcdl {
  d: path("M8.5 5v-.5A1.5 1.5 0 0 1 10 3h4a1.5 1.5 0 0 1 1.5 1.5V5h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wtksebbco {
  d: path("M8.5 3h7v4.5h-7ZM8 10.5h.01M8 14h.01M8 17.5h.01m2.99-7h5M11 14h3m-3 3.5h4");
}
</style><g class="ulnmmdpxh"><path class="re3nbbcdl"/><path class="wtksebbco"/></g>`,
		"fallback": "uix-sharp:amenities-list",
	});
}

export default Component;
