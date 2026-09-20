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
		"content": `<style>.c5ipzfbmx {
  d: path("M3 6h16");
}

.d8abqfbpc {
  d: path("M3 11h18");
}

.fu2iodbya {
  d: path("M3 16h16");
}

.gv9l4p83m {
  d: path("m21 19 -3 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ibh7zsb_p {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m16 19 -3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mudg_ac9k {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 16h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.pktulccyb {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 6h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.r_-onzaex {
  d: path("m16 19 -3 3");
}

.u9-67bbbq {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m21 19 -3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.yf_brbf0s {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 11h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="pktulccyb"/><path class="yf_brbf0s"/><path class="mudg_ac9k"/><path class="ibh7zsb_p"/><path class="u9-67bbbq"/><path class="c5ipzfbmx"/><path class="d8abqfbpc"/><path class="fu2iodbya"/><path class="r_-onzaex"/><path class="gv9l4p83m"/></g>`,
		"fallback": "iconmind:gale-duotone-thin",
	});
}

export default Component;
