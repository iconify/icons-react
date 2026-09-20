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
		"content": `<style>.hsmhdqayv {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M9 17h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jb_v2ub8s {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M6 12h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.kdybz_aht {
  d: path("M9 17h6");
}

.ozi-k-boi {
  d: path("M3 7h18");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.uda6dfbwy {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 7h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.vslz5yb3q {
  d: path("M6 12h12");
}
</style><g class="s0phu2bbs"><path class="uda6dfbwy"/><path class="jb_v2ub8s"/><path class="hsmhdqayv"/><path class="ozi-k-boi"/><path class="vslz5yb3q"/><path class="kdybz_aht"/></g>`,
		"fallback": "iconmind:funnel-step-duotone-bold",
	});
}

export default Component;
