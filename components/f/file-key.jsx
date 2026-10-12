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

.i9tm6qb-c {
  d: path("M13.75 2.75v3.5a2 2 0 0 0 2 2h3.5");
}

.jz9wy2bsc {
  d: path("M13.75 2.75h-6.5a2.5 2.5 0 0 0-2.5 2.5v13.5a2.5 2.5 0 0 0 2.5 2.5h9.5a2.5 2.5 0 0 0 2.5-2.5V8.25Z");
}

.lak5g3bpz {
  d: path("M11.25 14.75h4.25m-1 0v1.75");
}

.qhm14obvb {
  cx: 9.5px;
  cy: 14.75px;
  r: 1.75px;
}
</style><g class="hntgybcog"><path class="jz9wy2bsc"/><path class="i9tm6qb-c"/><circle class="qhm14obvb"/><path class="lak5g3bpz"/></g>`,
		"fallback": "iconoven:file-key",
	});
}

export default Component;
