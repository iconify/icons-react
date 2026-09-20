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

.k5ew2xonc {
  fill: currentColor;
  d: path("M10 8a2 2 0 0 1 2 -2 2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2 2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.m7u4cabld {
  d: path("M10 8a2 2 0 0 1 2 -2 2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2 2 2 0 0 1 -2 -2Z");
}

.yxow7abeb {
  fill: currentColor;
  d: path("M13 3H6v18h12V8");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="yxow7abeb"/><path class="k5ew2xonc"/><path class="abnm6smsv"/><path class="m7u4cabld"/></g>`,
		"fallback": "iconmind:attach-duotone-thin",
	});
}

export default Component;
