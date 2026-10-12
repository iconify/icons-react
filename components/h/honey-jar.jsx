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

.id3wjobgg {
  d: path("M7.5 5.75h9V7.5q2.25 1.125 2.25 3.75V19a2.25 2.25 0 0 1-2.25 2.25h-9A2.25 2.25 0 0 1 5.25 19v-7.75q0-2.625 2.25-3.75Z");
}

.k-t4h10yz {
  d: path("m14.17 16.5l-1.74 1q-.43.25-.86 0l-1.74-1q-.43-.25-.43-.75v-2q0-.5.43-.75l1.74-1q.43-.25.86 0l1.74 1q.43.25.43.75v2q0 .5-.43.75");
}

.xrhq07b1b {
  width: 11px;
  height: 3px;
  x: 6.5px;
  y: 2.75px;
  rx: 1px;
}
</style><g class="hntgybcog"><rect class="xrhq07b1b"/><path class="id3wjobgg"/><path class="k-t4h10yz"/></g>`,
		"fallback": "iconoven:honey-jar",
	});
}

export default Component;
