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

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
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
</style><g class="hntgybcog"><path class="rfpc8ubdp"/><path class="b1ew5xbzw"/><path class="ls68ftbad"/><path class="jvpr04bkw"/></g>`,
		"fallback": "iconmind:agent-review-score-outline-thin",
	});
}

export default Component;
