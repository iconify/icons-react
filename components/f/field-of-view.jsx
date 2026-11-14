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

.jl8jcjbbf {
  d: path("M2 12a10 10 0 1 0 20 0a10 10 0 1 0-20 0");
}

.uhmgd-eyj {
  fill: currentColor;
  d: path("M12 12L6 4a10 10 0 0 1 12 0Z");
}
</style><g class="hntgybcog"><path class="jl8jcjbbf"/><path class="uhmgd-eyj"/></g>`,
		"fallback": "uix:field-of-view",
	});
}

export default Component;
