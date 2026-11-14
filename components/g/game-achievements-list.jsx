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
		"content": `<style>.cf612-zhc {
  fill: currentColor;
  d: path("m12 9.5l1.323 2.68l2.957.429l-2.14 2.086l.505 2.946L12 16.25l-2.645 1.391l.505-2.946l-2.14-2.086l2.957-.429Z");
}

.dn8bfabzs {
  d: path("M8.5 3h7v4.5h-7Z");
}

.re3nbbcdl {
  d: path("M8.5 5v-.5A1.5 1.5 0 0 1 10 3h4a1.5 1.5 0 0 1 1.5 1.5V5h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="re3nbbcdl"/><path class="dn8bfabzs"/><path class="cf612-zhc"/></g>`,
		"fallback": "uix-sharp:game-achievements-list",
	});
}

export default Component;
