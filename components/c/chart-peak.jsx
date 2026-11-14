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

.n42bz5bcq {
  d: path("M12 7V2.5m-2 2l2-2l2 2");
}

.s6p1_bbdp {
  d: path("m2.5 20.5l4.5-3l5-7l5 7l4.5 3");
}

.wgcc5-bxm {
  fill: currentColor;
  d: path("M10 10.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><g class="hntgybcog"><path class="s6p1_bbdp"/><path class="wgcc5-bxm"/><path class="n42bz5bcq"/></g>`,
		"fallback": "uix:chart-peak",
	});
}

export default Component;
