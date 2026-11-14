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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r_hmgbb2z {
  d: path("M8.5 8a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M7 17l3-6l3 3h3");
}

.tg2ywbcft {
  d: path("M7.5 3.5h9A3.5 3.5 0 0 1 20 7v10a3.5 3.5 0 0 1-3.5 3.5h-9A3.5 3.5 0 0 1 4 17V7a3.5 3.5 0 0 1 3.5-3.5");
}
</style><g class="hntgybcog"><path class="tg2ywbcft"/><path class="r_hmgbb2z"/></g>`,
		"fallback": "uix:emergency-exit-warehouse",
	});
}

export default Component;
