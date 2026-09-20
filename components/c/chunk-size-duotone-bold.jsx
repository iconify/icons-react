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
		"content": `<style>.betk_pbkd {
  d: path("M8 4 6 6l2 2");
}

.f-g-_s4ku {
  d: path("M3 13a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.h7djn2ipu {
  fill: currentColor;
  d: path("M3 13a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ki-5h0s5c {
  d: path("M6 6h12");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.uwq4cli8g {
  d: path("m16 4 2 2 -2 2");
}
</style><g class="s0phu2bbs"><path class="h7djn2ipu"/><path class="f-g-_s4ku"/><path class="ki-5h0s5c"/><path class="betk_pbkd"/><path class="uwq4cli8g"/></g>`,
		"fallback": "iconmind:chunk-size-duotone-bold",
	});
}

export default Component;
