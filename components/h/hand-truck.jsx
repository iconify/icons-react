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

.lggdmi6jc {
  width: 9.75px;
  height: 10px;
  x: 10px;
  y: 7.25px;
  rx: 1.25px;
}

.qdwr1hbsf {
  d: path("M14.75 7.25v3.25");
}

.w9u-7prwp {
  d: path("M3.25 3.5h2.5v13.75h15.5");
}

.z6cqk8a1b {
  cx: 8.5px;
  cy: 19px;
  r: 2.25px;
}
</style><g class="hntgybcog"><path class="w9u-7prwp"/><rect class="lggdmi6jc"/><path class="qdwr1hbsf"/><circle class="z6cqk8a1b"/></g>`,
		"fallback": "iconoven:hand-truck",
	});
}

export default Component;
