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
		"content": `<style>.ap9gq30sy {
  d: path("M15.5 4a2 2 0 0 1 2 -2H20a2 2 0 0 1 2 2v2.5a2 2 0 0 1 -2 2h-2.5a2 2 0 0 1 -2 -2Z");
}

.cw_gsq1ee {
  d: path("m11 11 2 2");
}

.f1eo93bii {
  d: path("m13 11 -2 2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.t43qc9b_n {
  d: path("M2 17.5a2 2 0 0 1 2 -2h2.5a2 2 0 0 1 2 2V20a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.v-33iky6p {
  d: path("M2 4a2 2 0 0 1 2 -2h2.5a2 2 0 0 1 2 2v2.5a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.x3hw5zbys {
  d: path("M15.5 17.5a2 2 0 0 1 2 -2H20a2 2 0 0 1 2 2V20a2 2 0 0 1 -2 2h-2.5a2 2 0 0 1 -2 -2Z");
}
</style><g class="hntgybcog"><path class="v-33iky6p"/><path class="ap9gq30sy"/><path class="t43qc9b_n"/><path class="x3hw5zbys"/><path class="cw_gsq1ee"/><path class="f1eo93bii"/></g>`,
		"fallback": "iconmind:gpu-cluster-outline-thin",
	});
}

export default Component;
