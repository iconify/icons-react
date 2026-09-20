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
		"content": `<style>.ipb1x_bvt {
  fill: currentColor;
  d: path("m12 2.5 9.5 9.5 -9.5 9.5L2.5 12Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.mapwwf30m {
  d: path("M12 7v4.5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.sscby3y4w {
  d: path("m12 2.5 9.5 9.5 -9.5 9.5L2.5 12Z");
}

.vqi6vft7m {
  d: path("M11 15.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.wno2bb6wt {
  fill: currentColor;
  d: path("M11 15.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="ipb1x_bvt"/><path class="wno2bb6wt"/><path class="sscby3y4w"/><path class="mapwwf30m"/><path class="vqi6vft7m"/></g>`,
		"fallback": "iconmind:hazard-duotone-bold",
	});
}

export default Component;
