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
		"content": `<style>.ag9m5ebdy {
  d: path("M12 7v13");
}

.bmw7enbmr {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 7v13");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.dfbz-p2ca {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 20 16 8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jc9ozp-bv {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M9 4v3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.kp83gfxow {
  d: path("M4 20 16 8");
}

.m-fx_6r8x {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M15 4v3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mfc7nxp-y {
  d: path("M9 7h6");
}

.s6lrl6bmb {
  d: path("M9 4v3");
}

.xwfp38btc {
  d: path("M15 4v3");
}

.yjhohbbyr {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M9 7h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="jc9ozp-bv"/><path class="m-fx_6r8x"/><path class="yjhohbbyr"/><path class="bmw7enbmr"/><path class="dfbz-p2ca"/><path class="s6lrl6bmb"/><path class="xwfp38btc"/><path class="mfc7nxp-y"/><path class="ag9m5ebdy"/><path class="kp83gfxow"/></g>`,
		"fallback": "iconmind:fasting-duotone-thin",
	});
}

export default Component;
