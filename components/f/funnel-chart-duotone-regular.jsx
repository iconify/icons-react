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
		"content": `<style>.be306ynmy {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 6h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.bk5n09bgv {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M6 12h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.va0vmebdx {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M9 18h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.vslz5yb3q {
  d: path("M6 12h12");
}

.x3sflacnk {
  d: path("M9 18h6");
}

.xgrfb-bqu {
  d: path("M3 6h18");
}
</style><g class="nrj6p8qat"><path class="be306ynmy"/><path class="bk5n09bgv"/><path class="va0vmebdx"/><path class="xgrfb-bqu"/><path class="vslz5yb3q"/><path class="x3sflacnk"/></g>`,
		"fallback": "iconmind:funnel-chart-duotone-regular",
	});
}

export default Component;
