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
		"content": `<style>.acja6ya7a {
  fill: currentColor;
  d: path("M9 14a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.fbde_z08y {
  fill: currentColor;
  d: path("M3 6h10l8 8 -8 8H3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hgb-t7boy {
  d: path("M6 10a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.r8hnofl7s {
  fill: currentColor;
  d: path("M6 10a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
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

.v0y09obth {
  d: path("M12 12v4");
}

.w3hyiobto {
  d: path("M3 6h10l8 8 -8 8H3Z");
}

.zoz5ar7wf {
  d: path("M9 14a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}
</style><g class="s0phu2bbs"><path class="fbde_z08y"/><path class="r8hnofl7s"/><path class="acja6ya7a"/><path class="w3hyiobto"/><path class="hgb-t7boy"/><path class="zoz5ar7wf"/><path class="v0y09obth"/></g>`,
		"fallback": "iconmind:cost-tag-duotone-bold",
	});
}

export default Component;
