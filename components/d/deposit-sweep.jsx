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
		"content": `<style>.ja4jeto2m {
  d: path("m20.5 3.5l-7 7m.479 2.562L14.5 11.5l-2-2l-7 2.5c.5 3.5 2.5 6.5 6 8.5l.108-.323M9 13.25l2.234 4.021M14 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.nr2kwkbiv {
  d: path("M17 15h2a3 3 0 0 1 0 6h-2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ja4jeto2m"/><path class="nr2kwkbiv"/></g>`,
		"fallback": "uix-sharp:deposit-sweep",
	});
}

export default Component;
