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

.v52j16b9j {
  d: path("M2.5 6h15M8 6V4h4v2M4 6l1.5 13h9L16 6");
}

.wjd66kb_d {
  d: path("M5.5 19.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m12.5-5v3.5M18 21h.01");
}
</style><g class="hntgybcog"><path class="v52j16b9j"/><path class="wjd66kb_d"/></g>`,
		"fallback": "uix:bin-hazardous",
	});
}

export default Component;
