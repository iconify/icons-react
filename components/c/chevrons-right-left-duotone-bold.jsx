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
		"content": `<style>.e_z28zb4o {
  d: path("m20 7 -5 5 5 5");
}

.h_ozghejt {
  d: path("m4 7 5 5 -5 5");
}

.km3c98byo {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m20 7 -5 5 5 5");
  opacity: var(--svg-opacity--0-2, 0.2);
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
</style><g class="s0phu2bbs"><path class="vn7lxkbsw"/><path class="km3c98byo"/><path class="h_ozghejt"/><path class="e_z28zb4o"/></g>`,
		"fallback": "iconmind:chevrons-right-left-duotone-bold",
	});
}

export default Component;
