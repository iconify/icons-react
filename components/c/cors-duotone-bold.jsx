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
		"content": `<style>.dtio47knr {
  fill: currentColor;
  d: path("M4.5 6a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.h1x6gzy2a {
  d: path("M4.5 6a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.ixf_8y22x {
  d: path("M2 6a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.jc033nbow {
  fill: currentColor;
  d: path("M2 6a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.mqtixbwqo {
  d: path("M2 8h20");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.uogqi4bmc {
  d: path("m8 13 3 3 5 -5");
}
</style><g class="s0phu2bbs"><path class="jc033nbow"/><path class="dtio47knr"/><path class="ixf_8y22x"/><path class="mqtixbwqo"/><path class="h1x6gzy2a"/><path class="uogqi4bmc"/></g>`,
		"fallback": "iconmind:cors-duotone-bold",
	});
}

export default Component;
