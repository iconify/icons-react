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
		"content": `<style>.bm2x5-bhg {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M11 17h9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.h_ozghejt {
  d: path("m4 7 5 5 -5 5");
}

.j4cr2gb0p {
  d: path("M11 17h9");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vn7lxkbsw {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m4 7 5 5 -5 5");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="vn7lxkbsw"/><path class="bm2x5-bhg"/><path class="h_ozghejt"/><path class="j4cr2gb0p"/></g>`,
		"fallback": "iconmind:cli-duotone-bold",
	});
}

export default Component;
