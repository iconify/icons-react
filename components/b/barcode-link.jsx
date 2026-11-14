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
		"content": `<style>.gclm_yb7b {
  d: path("M3.5 4.5v15m3-15v15m3-15v15m3-15V12m1.555 6.823l1.768-1.768a1.5 1.5 0 0 1 2.122 0a1.5 1.5 0 0 1 0 2.122l-1.768 1.768a1.5 1.5 0 0 1-2.122 0a1.5 1.5 0 0 1 0-2.122");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j8a5_e5qf {
  d: path("m17.055 15.823l1.768-1.768a1.5 1.5 0 0 1 2.122 0a1.5 1.5 0 0 1 0 2.122l-1.768 1.768a1.5 1.5 0 0 1-2.122 0a1.5 1.5 0 0 1 0-2.122");
}
</style><g class="hntgybcog"><path class="gclm_yb7b"/><path class="j8a5_e5qf"/></g>`,
		"fallback": "uix:barcode-link",
	});
}

export default Component;
