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
		"content": `<style>.dihddo_by {
  d: path("M6 18h12");
}

.j08f9ezai {
  d: path("m12 13 4 -4 4 4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t-oxscctn {
  d: path("m5 13 4 -4 4 4");
}

.zugrvnb7t {
  d: path("M2 13h20");
}
</style><g class="s0phu2bbs"><path class="zugrvnb7t"/><path class="t-oxscctn"/><path class="j08f9ezai"/><path class="dihddo_by"/></g>`,
		"fallback": "iconmind:horizon-outline-bold",
	});
}

export default Component;
