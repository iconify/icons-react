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
		"content": `<style>.j1rehpbmf {
  d: path("M7 12a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v2.5a2 2 0 0 1 -2 2H9a2 2 0 0 1 -2 -2Z");
}

.jrpnc2pnl {
  d: path("M15 5h3a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V8a3 3 0 0 1 3 -3h3");
}

.q8cj1m5wa {
  fill: currentColor;
  d: path("M7 12a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v2.5a2 2 0 0 1 -2 2H9a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.z92okmbgh {
  fill: currentColor;
  d: path("M15 5h3a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V8a3 3 0 0 1 3 -3h3");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="z92okmbgh"/><path class="q8cj1m5wa"/><path class="jrpnc2pnl"/><path class="j1rehpbmf"/></g>`,
		"fallback": "iconmind:dashboard-panel-duotone-bold",
	});
}

export default Component;
