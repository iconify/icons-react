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
		"content": `<style>.cfd43lbgp {
  d: path("M7 13h10");
}

.hpthd_boc {
  d: path("M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}

.jof7c9fpk {
  d: path("M4 9h16");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.szshe-6ah {
  d: path("M7 17h10");
}
</style><g class="nrj6p8qat"><path class="hpthd_boc"/><path class="jof7c9fpk"/><path class="cfd43lbgp"/><path class="szshe-6ah"/></g>`,
		"fallback": "iconmind:dimension-table-outline-regular",
	});
}

export default Component;
