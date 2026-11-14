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
		"content": `<style>.alp1ribyu {
  d: path("M4.5 5.5a7.5 2.5 0 1 0 15 0a7.5 2.5 0 1 0-15 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r4xl3mbcl {
  d: path("M4.5 5.5v13a7.5 2.5 0 0 0 15 0v-13");
}

.wuib9ebtp {
  fill: currentColor;
  d: path("M4.5 15a7.5 2.5 0 0 0 15 0v3.5a7.5 2.5 0 0 1-15 0Z");
}
</style><g class="hntgybcog"><path class="alp1ribyu"/><path class="r4xl3mbcl"/><path class="wuib9ebtp"/></g>`,
		"fallback": "uix:data-balance",
	});
}

export default Component;
