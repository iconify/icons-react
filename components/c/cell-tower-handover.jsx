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
		"content": `<style>.ohnk6ztpt {
  d: path("m15.25 8l2.25 1l1-2.5");
}

.txs7gjbnm {
  d: path("m3.5 21l3-9l3 9m5 0l3-9l3 9M6.5 8.5a6.5 6.5 0 0 1 11 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="txs7gjbnm"/><path class="ohnk6ztpt"/></g>`,
		"fallback": "uix-sharp:cell-tower-handover",
	});
}

export default Component;
