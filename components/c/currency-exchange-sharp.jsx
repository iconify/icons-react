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
		"content": `<style>.azpvbcbbw {
  cx: 16.5px;
  cy: 16.5px;
  r: 4.5px;
}

.qtr58-ckh {
  cx: 7.5px;
  cy: 7.5px;
  r: 4.5px;
}

.uscb7h6rg {
  d: path("M14.5 4.5H19v5.25m-2-2l2 2l2-2M9.5 19.5H5v-5.25m2 2l-2-2l-2 2");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="qtr58-ckh"/><circle class="azpvbcbbw"/><path class="uscb7h6rg"/></g>`,
		"fallback": "iconoven:currency-exchange-sharp",
	});
}

export default Component;
