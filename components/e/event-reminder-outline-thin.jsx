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
		"content": `<style>.ewxguxn4h {
  d: path("M2 6h11v3l-2 2 2 2v3H2v-3l2 -2 -2 -2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ipv0cebdm {
  d: path("M13 16a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.q3dplub_k {
  d: path("M17 16v-3");
}
</style><g class="hntgybcog"><path class="ewxguxn4h"/><path class="ipv0cebdm"/><path class="q3dplub_k"/></g>`,
		"fallback": "iconmind:event-reminder-outline-thin",
	});
}

export default Component;
