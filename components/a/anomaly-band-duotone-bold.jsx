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
		"content": `<style>.fecwpdb_s {
  fill: currentColor;
  d: path("M14 18.5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.n-7t0yb1r {
  d: path("M3 13h18");
}

.ozi-k-boi {
  d: path("M3 7h18");
}

.qw2d5tbco {
  d: path("M14 18.5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
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

.wsc8jcb1j {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 13h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="fecwpdb_s"/><path class="uda6dfbwy"/><path class="wsc8jcb1j"/><path class="ozi-k-boi"/><path class="n-7t0yb1r"/><path class="qw2d5tbco"/></g>`,
		"fallback": "iconmind:anomaly-band-duotone-bold",
	});
}

export default Component;
