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
		"content": `<style>.a6r83470a {
  d: path("M9 20c-3 -3 -4 -7 -3 -10s4 -4 6 -2c2 -2 5 -1 6 2s0 7 -3 10Z");
}

.did41pbsp {
  d: path("m15 7 3 -3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lyqw31v8s {
  d: path("M11 7V3");
}

.vzsghy7ub {
  d: path("M9 7 6 4");
}
</style><g class="hntgybcog"><path class="a6r83470a"/><path class="vzsghy7ub"/><path class="lyqw31v8s"/><path class="did41pbsp"/></g>`,
		"fallback": "iconmind:anatomy-heart-outline-thin",
	});
}

export default Component;
