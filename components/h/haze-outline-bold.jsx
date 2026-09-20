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
		"content": `<style>.c5v_de02i {
  d: path("M7.5 8a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0 -9 0");
}

.miurf-h0g {
  d: path("M5 18h14");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.yih0nfb7c {
  d: path("M3 14h18");
}
</style><g class="s0phu2bbs"><path class="c5v_de02i"/><path class="yih0nfb7c"/><path class="miurf-h0g"/></g>`,
		"fallback": "iconmind:haze-outline-bold",
	});
}

export default Component;
