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
		"content": `<style>.abqnffbdc {
  d: path("m2.5 11l4-5h15v7l-5 5h-14Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r_u5cjb_d {
  d: path("M2.5 11h14l5-5m-5 5v7");
}
</style><g class="hntgybcog"><path class="abqnffbdc"/><path class="r_u5cjb_d"/></g>`,
		"fallback": "uix:brick",
	});
}

export default Component;
