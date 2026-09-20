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
		"content": `<style>.asjt_p6in {
  d: path("M10.5 15a1.5 1.5 0 0 1 3 0");
}

.c26uqybpm {
  fill: currentColor;
  d: path("M9 15h6v3H9Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.cf2pd_8sh {
  d: path("M9 15h6v3H9Z");
}

.q8pkiebhf {
  fill: currentColor;
  d: path("M9.5 4h5v2.5L18 10a7 7 0 1 1 -12 0l3.5 -3.5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.y7d97_qtf {
  d: path("M9.5 4h5v2.5L18 10a7 7 0 1 1 -12 0l3.5 -3.5Z");
}
</style><g class="s0phu2bbs"><path class="q8pkiebhf"/><path class="c26uqybpm"/><path class="y7d97_qtf"/><path class="cf2pd_8sh"/><path class="asjt_p6in"/></g>`,
		"fallback": "iconmind:escrow-account-duotone-bold",
	});
}

export default Component;
