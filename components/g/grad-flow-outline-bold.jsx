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
		"content": `<style>.b3s4djbny {
  d: path("M4 5h16");
}

.eskbyryvt {
  d: path("m10 14.5 2 2 2 -2");
}

.hc7fbd-jo {
  d: path("M4 19h16");
}

.mw6526b2i {
  d: path("m10 7.5 2 2 2 -2");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.sxlwlmkmh {
  d: path("M4 12h16");
}
</style><g class="s0phu2bbs"><path class="b3s4djbny"/><path class="mw6526b2i"/><path class="sxlwlmkmh"/><path class="eskbyryvt"/><path class="hc7fbd-jo"/></g>`,
		"fallback": "iconmind:grad-flow-outline-bold",
	});
}

export default Component;
