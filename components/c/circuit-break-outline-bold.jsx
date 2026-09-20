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
		"content": `<style>.km504hb-m {
  d: path("M15.5 16H22");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.v5td4_4qf {
  d: path("M2 16h6.5");
}

.w7wsu271f {
  d: path("m8.5 16 8 -8");
}
</style><g class="s0phu2bbs"><path class="v5td4_4qf"/><path class="km504hb-m"/><path class="w7wsu271f"/></g>`,
		"fallback": "iconmind:circuit-break-outline-bold",
	});
}

export default Component;
