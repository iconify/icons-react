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
		"content": `<style>.ivdpkbnwt {
  d: path("m11 9 3 3 -3 3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tkeq0bpvv {
  d: path("M18 4v16");
}

.yw-dgs_nk {
  d: path("M4 12h10");
}
</style><g class="s0phu2bbs"><path class="tkeq0bpvv"/><path class="yw-dgs_nk"/><path class="ivdpkbnwt"/></g>`,
		"fallback": "iconmind:guardrail-outline-bold",
	});
}

export default Component;
