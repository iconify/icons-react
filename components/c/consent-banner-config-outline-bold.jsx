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
		"content": `<style>.e84dbd0ap {
  d: path("M5 16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2 2 2 0 0 1 -2 2H7a2 2 0 0 1 -2 -2");
}

.jrpnc2pnl {
  d: path("M15 5h3a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V8a3 3 0 0 1 3 -3h3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tr7bih29p {
  d: path("M15 7.5v3");
}

.wfr_gqbss {
  d: path("M9 7.5v3");
}
</style><g class="s0phu2bbs"><path class="jrpnc2pnl"/><path class="e84dbd0ap"/><path class="wfr_gqbss"/><path class="tr7bih29p"/></g>`,
		"fallback": "iconmind:consent-banner-config-outline-bold",
	});
}

export default Component;
