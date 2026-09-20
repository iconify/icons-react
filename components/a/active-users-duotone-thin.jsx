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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.igyz-cc5b {
  d: path("M3 20a5 5 0 0 1 10 0");
}

.k_k2t6-nh {
  fill: currentColor;
  d: path("M5 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.mlfk3xi6j {
  d: path("M18 10v10");
}

.pt73j1ikv {
  d: path("M15 14v6");
}

.q8-0ejn0y {
  d: path("M5 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.y4qjbbcmm {
  d: path("M21 6v14");
}
</style><g class="hntgybcog"><path class="k_k2t6-nh"/><path class="q8-0ejn0y"/><path class="igyz-cc5b"/><path class="pt73j1ikv"/><path class="mlfk3xi6j"/><path class="y4qjbbcmm"/></g>`,
		"fallback": "iconmind:active-users-duotone-thin",
	});
}

export default Component;
