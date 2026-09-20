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
		"content": `<style>.b1ew5xbzw {
  d: path("M14 13v5");
}

.jvpr04bkw {
  d: path("M21 15v3");
}

.ls68ftbad {
  d: path("M17.5 9v9");
}

.rfpc8ubdp {
  d: path("M8.19 8.37a4 4 0 1 1 -3.38 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="rfpc8ubdp"/><path class="b1ew5xbzw"/><path class="ls68ftbad"/><path class="jvpr04bkw"/></g>`,
		"fallback": "iconmind:agent-review-score-outline-bold",
	});
}

export default Component;
