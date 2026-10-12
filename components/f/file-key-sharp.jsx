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
		"content": `<style>.lak5g3bpz {
  d: path("M11.25 14.75h4.25m-1 0v1.75");
}

.mqbcq6bbi {
  d: path("M13.75 2.75v5.5h5.5");
}

.qhm14obvb {
  cx: 9.5px;
  cy: 14.75px;
  r: 1.75px;
}

.rh2140hgr {
  d: path("M13.75 2.75h-9v18.5h14.5v-13Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="rh2140hgr"/><path class="mqbcq6bbi"/><circle class="qhm14obvb"/><path class="lak5g3bpz"/></g>`,
		"fallback": "iconoven:file-key-sharp",
	});
}

export default Component;
