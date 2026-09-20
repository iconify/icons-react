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
		"content": `<style>.abnm6smsv {
  d: path("M13 3H6v18h12V8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m7u4cabld {
  d: path("M10 8a2 2 0 0 1 2 -2 2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2 2 2 0 0 1 -2 -2Z");
}
</style><g class="hntgybcog"><path class="abnm6smsv"/><path class="m7u4cabld"/></g>`,
		"fallback": "iconmind:attach-outline-thin",
	});
}

export default Component;
