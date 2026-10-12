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

.m0ydh5bsj {
  cx: 6.75px;
  cy: 5.25px;
  r: 2.25px;
}

.mtl-gzbxy {
  cx: 6.75px;
  cy: 18.75px;
  r: 2.25px;
}

.t49y4h79e {
  cx: 17.25px;
  cy: 13.75px;
  r: 2.25px;
}

.vrw5b6b7q {
  d: path("M6.75 7.5v9m0-9c0 3.75 3 6.25 8.25 6.25");
}
</style><g class="hntgybcog"><circle class="m0ydh5bsj"/><circle class="mtl-gzbxy"/><circle class="t49y4h79e"/><path class="vrw5b6b7q"/></g>`,
		"fallback": "iconoven:git-merge",
	});
}

export default Component;
