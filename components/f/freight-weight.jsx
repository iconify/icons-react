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
		"content": `<style>.d0mxw3b9e {
  d: path("M12 12.5v1.75");
}

.f460oh67c {
  width: 6px;
  height: 5.5px;
  x: 9px;
  y: 12.5px;
  rx: 0.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mq68zybfy {
  cx: 12px;
  cy: 5.75px;
  r: 2.5px;
}

.y3ij7xfhg {
  d: path("M7.2 8.25h9.6a1.5 1.5 0 0 1 1.45 1.12l2.6 10a1.5 1.5 0 0 1-1.45 1.88H4.6a1.5 1.5 0 0 1-1.45-1.88l2.6-10A1.5 1.5 0 0 1 7.2 8.25");
}
</style><g class="hntgybcog"><circle class="mq68zybfy"/><path class="y3ij7xfhg"/><rect class="f460oh67c"/><path class="d0mxw3b9e"/></g>`,
		"fallback": "iconoven:freight-weight",
	});
}

export default Component;
