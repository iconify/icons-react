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
		"content": `<style>.b5g6cpb9d {
  cx: 12px;
  cy: 5.25px;
  r: 2.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kzipulb2d {
  d: path("M12 13.25v2.5");
}

.l5sathbfq {
  d: path("M4.75 21.25V15a4.5 4.5 0 0 1 4.5-4.5h5.5a4.5 4.5 0 0 1 4.5 4.5v6.25");
}

.qfwke0toe {
  width: 9px;
  height: 6.5px;
  x: 7.5px;
  y: 13.25px;
  rx: 1px;
}
</style><g class="hntgybcog"><circle class="b5g6cpb9d"/><path class="l5sathbfq"/><rect class="qfwke0toe"/><path class="kzipulb2d"/></g>`,
		"fallback": "iconoven:carrying-box",
	});
}

export default Component;
