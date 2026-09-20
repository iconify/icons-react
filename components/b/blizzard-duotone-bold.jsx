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
		"content": `<style>.c54duacdo {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 6h11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.e9z836b7m {
  d: path("M18.5 15v6m-3 0 6 -6");
}

.em798y7rn {
  d: path("M6 12h14");
}

.gi7rbfrai {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 18h11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.guxnvybqm {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M18.5 3v6m-3 0 6 -6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.gzvvr_cib {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M6 12h14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jyim9bnxo {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M18.5 15v6m-3 0 6 -6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrqy16b7j {
  d: path("M3 6h11");
}

.pvfbz5b4i {
  d: path("M3 18h11");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wy-zn0bse {
  d: path("M18.5 3v6m-3 0 6 -6");
}
</style><g class="s0phu2bbs"><path class="c54duacdo"/><path class="gzvvr_cib"/><path class="gi7rbfrai"/><path class="guxnvybqm"/><path class="jyim9bnxo"/><path class="nrqy16b7j"/><path class="em798y7rn"/><path class="pvfbz5b4i"/><path class="wy-zn0bse"/><path class="e9z836b7m"/></g>`,
		"fallback": "iconmind:blizzard-duotone-bold",
	});
}

export default Component;
