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
		"content": `<style>.h0bk_yb1x {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M9.5 15.5 12 18l2.5 -2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j15uiubkt {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 12v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mcubrkb2y {
  d: path("M2 21h20M5 21V9m14 12V9M2 9h20M5 9l5.5 -5.5h3L19 9");
}

.mqi2_ac9e {
  d: path("M9.5 15.5 12 18l2.5 -2.5");
}

.ohhz_s35v {
  d: path("M12 12v6");
}

.yw0x1wbxg {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M2 21h20M5 21V9m14 12V9M2 9h20M5 9l5.5 -5.5h3L19 9");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="yw0x1wbxg"/><path class="j15uiubkt"/><path class="h0bk_yb1x"/><path class="mcubrkb2y"/><path class="ohhz_s35v"/><path class="mqi2_ac9e"/></g>`,
		"fallback": "iconmind:cash-deposit-duotone-thin",
	});
}

export default Component;
