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
		"content": `<style>.e2kgfl2ea {
  d: path("M2 15a3 3 0 0 1 6 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jkjmjem6y {
  d: path("m11 10 -2 2 2 2");
}

.jv3d31_7h {
  d: path("M16 15a3 3 0 0 1 6 0");
}

.mn-a1zb6m {
  d: path("M3 9a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.s25-orfog {
  d: path("M17 9a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.x1_r36phd {
  d: path("M9 12h6");
}
</style><g class="hntgybcog"><path class="mn-a1zb6m"/><path class="e2kgfl2ea"/><path class="s25-orfog"/><path class="jv3d31_7h"/><path class="x1_r36phd"/><path class="jkjmjem6y"/></g>`,
		"fallback": "iconmind:follow-back-outline-thin",
	});
}

export default Component;
