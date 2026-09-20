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
		"content": `<style>.goqqd75_r {
  d: path("M20 4v5");
}

.hlt9oudyd {
  d: path("M15 9v7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ig8k5lhpw {
  d: path("M10 11v5");
}

.nt8ufs66i {
  d: path("M5 6v5");
}
</style><g class="hntgybcog"><path class="nt8ufs66i"/><path class="ig8k5lhpw"/><path class="hlt9oudyd"/><path class="goqqd75_r"/></g>`,
		"fallback": "iconmind:chart-waterfall-outline-thin",
	});
}

export default Component;
