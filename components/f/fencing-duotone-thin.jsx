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
		"content": `<style>.bh_xkgblo {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m3 4 16 16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ndosv0bel {
  fill: currentColor;
  d: path("M3 20a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.r0uia_bgu {
  d: path("M19 20a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.sfoe2bukt {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M21 4 5 20");
  opacity: var(--svg-opacity--0-2, 0.2);
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
</style><g class="hntgybcog"><path class="ndosv0bel"/><path class="v4_esibhq"/><path class="bh_xkgblo"/><path class="sfoe2bukt"/><path class="ywch90sba"/><path class="uwi1_aczt"/><path class="u1gt5absq"/><path class="r0uia_bgu"/></g>`,
		"fallback": "iconmind:fencing-duotone-thin",
	});
}

export default Component;
