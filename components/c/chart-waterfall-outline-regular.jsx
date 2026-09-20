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

.ig8k5lhpw {
  d: path("M10 11v5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.nt8ufs66i {
  d: path("M5 6v5");
}
</style><g class="nrj6p8qat"><path class="nt8ufs66i"/><path class="ig8k5lhpw"/><path class="hlt9oudyd"/><path class="goqqd75_r"/></g>`,
		"fallback": "iconmind:chart-waterfall-outline-regular",
	});
}

export default Component;
