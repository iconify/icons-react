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

.ivzfigb6p {
  fill: currentColor;
  d: path("M9.5 12a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}

.kkm_al_kn {
  d: path("M17 12a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M7 12h2.5m5 0H17");
}

.ne3ahqb2p {
  d: path("M2 12a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}
</style><g class="hntgybcog"><path class="ne3ahqb2p"/><path class="ivzfigb6p"/><path class="kkm_al_kn"/></g>`,
		"fallback": "uix:deal-stage",
	});
}

export default Component;
