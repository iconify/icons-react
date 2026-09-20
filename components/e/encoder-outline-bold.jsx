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
		"content": `<style>.adiugjbhs {
  d: path("m15 9 3 3 -3 3");
}

.ps3-67b_v {
  d: path("m4 3 6 6v6l-6 6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wlia6bb5b {
  d: path("M11 12h7");
}
</style><g class="s0phu2bbs"><path class="ps3-67b_v"/><path class="wlia6bb5b"/><path class="adiugjbhs"/></g>`,
		"fallback": "iconmind:encoder-outline-bold",
	});
}

export default Component;
