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

.lzogy7svx {
  d: path("M10 3h4v6l6 6v6H4v-6l6 -6Z");
}

.xt2uo_lyl {
  d: path("m12 12 -3 3h3l-3 3");
}
</style><g class="hntgybcog"><path class="lzogy7svx"/><path class="xt2uo_lyl"/></g>`,
		"fallback": "iconmind:chaos-experiment-outline-thin",
	});
}

export default Component;
