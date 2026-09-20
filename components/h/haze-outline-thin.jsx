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

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.miurf-h0g {
  d: path("M5 18h14");
}

.yih0nfb7c {
  d: path("M3 14h18");
}
</style><g class="hntgybcog"><path class="c5v_de02i"/><path class="yih0nfb7c"/><path class="miurf-h0g"/></g>`,
		"fallback": "iconmind:haze-outline-thin",
	});
}

export default Component;
