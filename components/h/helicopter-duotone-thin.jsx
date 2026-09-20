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
		"content": `<style>.dksaywbrx {
  d: path("M15 11h6V6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jtrmczbpr {
  d: path("M2 6h14");
}

.m0f5ny81l {
  d: path("M5 20h8");
}

.sb7rl7wyu {
  d: path("M9 6v3");
}

.ww1ug7bih {
  fill: currentColor;
  d: path("M3 11a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.y_6hdgy9a {
  d: path("M3 11a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}
</style><g class="hntgybcog"><path class="ww1ug7bih"/><path class="y_6hdgy9a"/><path class="jtrmczbpr"/><path class="sb7rl7wyu"/><path class="dksaywbrx"/><path class="m0f5ny81l"/></g>`,
		"fallback": "iconmind:helicopter-duotone-thin",
	});
}

export default Component;
