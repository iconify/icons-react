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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.t_l968b6i {
  stroke-opacity: 0.4;
  d: path("M11 15c-2 0-2-3 0-3m4 0c2 0 2 3 0 3s-2-3 0-3");
}

.yd5yxj9_b {
  d: path("M3 9a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z");
}
</style><g class="nrj6p8qat"><path class="t_l968b6i"/><path class="yd5yxj9_b"/></g>`,
		"fallback": "coolicons:credit-card-alt-duocolor-round",
	});
}

export default Component;
