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
		"content": `<style>.kj_xiu02e {
  d: path("m12 4 8 8 -8 8 -8 -8Z");
}

.oy5p0_yoh {
  fill: currentColor;
  d: path("m12 4 8 8 -8 8 -8 -8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.r4un9bb7j {
  fill: currentColor;
  d: path("m12 8 4 4 -4 4 -4 -4Z");
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

.zwbbmtbru {
  d: path("m12 8 4 4 -4 4 -4 -4Z");
}
</style><g class="s0phu2bbs"><path class="oy5p0_yoh"/><path class="r4un9bb7j"/><path class="kj_xiu02e"/><path class="zwbbmtbru"/></g>`,
		"fallback": "iconmind:chart-radar-duotone-bold",
	});
}

export default Component;
