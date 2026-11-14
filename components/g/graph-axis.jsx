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

.jkapk7bva {
  d: path("M4.5 3v16.5H21");
}

.v8tdnrbxp {
  d: path("m2.5 5l2-2l2 2M19 17.5l2 2l-2 2m-9.5-2V17m5 2.5V17");
}
</style><g class="hntgybcog"><path class="jkapk7bva"/><path class="v8tdnrbxp"/></g>`,
		"fallback": "uix:graph-axis",
	});
}

export default Component;
