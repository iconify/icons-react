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
		"content": `<style>.bd2644b0f {
  d: path("M8 15.75L5.5 13A1.75 1.75 0 1 1 8 10.5a1.75 1.75 0 1 1 2.5 2.5ZM13.5 8h5m-5 4h4m-4 4H16");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wrcg6qhaf {
  d: path("M2.5 4.5h19v15h-19Z");
}
</style><g class="ulnmmdpxh"><path class="wrcg6qhaf"/><path class="bd2644b0f"/></g>`,
		"fallback": "uix-sharp:baby-name",
	});
}

export default Component;
