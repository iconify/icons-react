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
		"content": `<style>.ehgmcug7p {
  d: path("m10.75 10l1.75-1.5v8");
}

.eryghnzlv {
  d: path("m5.024 18.338l3.152-13A1.75 1.75 0 0 1 9.876 4h4.248a1.75 1.75 0 0 1 1.7 1.338l3.152 13a1.75 1.75 0 0 1-1.701 2.162H6.725a1.75 1.75 0 0 1-1.701-2.162");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="eryghnzlv"/><path class="ehgmcug7p"/></g>`,
		"fallback": "uix:evidence-marker",
	});
}

export default Component;
