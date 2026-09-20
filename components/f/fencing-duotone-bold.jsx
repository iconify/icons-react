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
		"content": `<style>.kzztgab9v {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m3 4 16 16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ndosv0bel {
  fill: currentColor;
  d: path("M3 20a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.pqgwswb7d {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M21 4 5 20");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.r0uia_bgu {
  d: path("M19 20a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.u1gt5absq {
  d: path("M3 20a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.uwi1_aczt {
  d: path("M21 4 5 20");
}

.v4_esibhq {
  fill: currentColor;
  d: path("M19 20a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ywch90sba {
  d: path("m3 4 16 16");
}
</style><g class="s0phu2bbs"><path class="ndosv0bel"/><path class="v4_esibhq"/><path class="kzztgab9v"/><path class="pqgwswb7d"/><path class="ywch90sba"/><path class="uwi1_aczt"/><path class="u1gt5absq"/><path class="r0uia_bgu"/></g>`,
		"fallback": "iconmind:fencing-duotone-bold",
	});
}

export default Component;
