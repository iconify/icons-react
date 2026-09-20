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
		"content": `<style>.ffwaozrbk {
  d: path("M10 10h4");
}

.fmlaifbpn {
  d: path("M12 16v4");
}

.h3siy4w6z {
  d: path("M8 8a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2Z");
}

.k0u_xl_dw {
  fill: currentColor;
  d: path("M8 8a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2Z");
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

.sgr_j7bvk {
  d: path("M8 3h8");
}

.yazo7scbq {
  d: path("M12 3v3");
}
</style><g class="s0phu2bbs"><path class="k0u_xl_dw"/><path class="h3siy4w6z"/><path class="sgr_j7bvk"/><path class="yazo7scbq"/><path class="fmlaifbpn"/><path class="ffwaozrbk"/></g>`,
		"fallback": "iconmind:injection-duotone-bold",
	});
}

export default Component;
