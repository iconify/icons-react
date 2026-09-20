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
		"content": `<style>.mjze8rg7o {
  d: path("M9 2.5H3l7 7V12h4V9.5l7 -7h-6");
}

.mo-ktlbjm {
  d: path("M10.5 18h3");
}

.olzrbkb7x {
  d: path("M9 15.5v5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.te5l3v53b {
  d: path("M15 15.5v5");
}
</style><g class="s0phu2bbs"><path class="mjze8rg7o"/><path class="olzrbkb7x"/><path class="mo-ktlbjm"/><path class="te5l3v53b"/></g>`,
		"fallback": "iconmind:fusion-rank-outline-bold",
	});
}

export default Component;
