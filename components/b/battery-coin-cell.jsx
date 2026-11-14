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
		"content": `<style>.h0--x8cea {
  d: path("M2.5 9v5.5a9.5 5.5 0 0 0 19 0V9M12 7v4m-2-2h4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nsyxnlb_e {
  d: path("M2.5 9a9.5 5.5 0 1 0 19 0a9.5 5.5 0 1 0-19 0");
}
</style><g class="hntgybcog"><path class="nsyxnlb_e"/><path class="h0--x8cea"/></g>`,
		"fallback": "uix:battery-coin-cell",
	});
}

export default Component;
