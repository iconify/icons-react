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

.vmw-ke_8r {
  d: path("M7.25 9H6m2.64-3.36l-.88-.88M12 4.25V3m3.36 2.64l.88-.88M16.75 9H18M2.75 15.25h18.5m-8.75 0l-1.5 2L12.75 19l-1 2.25");
}

.vxcqd5b0h {
  cx: 12px;
  cy: 9px;
  r: 2.75px;
}
</style><g class="hntgybcog"><circle class="vxcqd5b0h"/><path class="vmw-ke_8r"/></g>`,
		"fallback": "iconoven:drought",
	});
}

export default Component;
