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
		"content": `<style>.i_j3w8q_a {
  cx: 12px;
  cy: 14.75px;
  r: 3.75px;
}

.mqbcq6bbi {
  d: path("M13.75 2.75v5.5h5.5");
}

.rh2140hgr {
  d: path("M13.75 2.75h-9v18.5h14.5v-13Z");
}

.t_4ypdb_t {
  d: path("M8.25 14.75h7.5M12 11c-1.6 2.2-1.6 5.3 0 7.5c1.6-2.2 1.6-5.3 0-7.5Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="rh2140hgr"/><path class="mqbcq6bbi"/><circle class="i_j3w8q_a"/><path class="t_4ypdb_t"/></g>`,
		"fallback": "iconoven:file-html-sharp",
	});
}

export default Component;
