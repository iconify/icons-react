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
		"content": `<style>.ehib3abci {
  d: path("M15 8h6v4h-6Z");
}

.fduloacov {
  d: path("M15 16h6v4h-6Z");
}

.fhs8z1bjw {
  d: path("M3 16h6v4H3Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mupo5fbhr {
  d: path("M3 8h6v4H3Z");
}
</style><g class="hntgybcog"><path class="mupo5fbhr"/><path class="ehib3abci"/><path class="fhs8z1bjw"/><path class="fduloacov"/></g>`,
		"fallback": "iconmind:exam-hall-outline-thin",
	});
}

export default Component;
