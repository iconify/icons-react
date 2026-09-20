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

.ia4sldbfw {
  d: path("M3 21a9 9 0 0 1 18 0");
}

.pemn838wn {
  d: path("M9 6a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.s0_88jb5l {
  d: path("M9 16v3h6v-3");
}

.uto0n9pso {
  d: path("M7 16h10");
}
</style><g class="hntgybcog"><path class="pemn838wn"/><path class="ia4sldbfw"/><path class="uto0n9pso"/><path class="s0_88jb5l"/></g>`,
		"fallback": "iconmind:cabin-crew-outline-thin",
	});
}

export default Component;
