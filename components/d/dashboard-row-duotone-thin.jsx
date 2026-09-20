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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j_0vo4w0c {
  d: path("M6 13a2.5 2.5 0 0 1 2.5 -2.5h7A2.5 2.5 0 0 1 18 13a2.5 2.5 0 0 1 -2.5 2.5h-7A2.5 2.5 0 0 1 6 13");
}

.jrpnc2pnl {
  d: path("M15 5h3a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V8a3 3 0 0 1 3 -3h3");
}

.oa4vcsbqv {
  fill: currentColor;
  d: path("M6 13a2.5 2.5 0 0 1 2.5 -2.5h7A2.5 2.5 0 0 1 18 13a2.5 2.5 0 0 1 -2.5 2.5h-7A2.5 2.5 0 0 1 6 13");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.z92okmbgh {
  fill: currentColor;
  d: path("M15 5h3a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V8a3 3 0 0 1 3 -3h3");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="z92okmbgh"/><path class="oa4vcsbqv"/><path class="jrpnc2pnl"/><path class="j_0vo4w0c"/></g>`,
		"fallback": "iconmind:dashboard-row-duotone-thin",
	});
}

export default Component;
