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
		"content": `<style>.etf2xkbvu {
  d: path("M19 15L19 23M15 19L23 19");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.k5enx8bky {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2 1L20 1C20.5523 1 21 1.4477 21 2L21 11C21 11.5523 20.5523 12 20 12L12 12L12 20C12 20.5523 11.5523 21 11 21L2 21C1.4477 21 1 20.5523 1 20L1 2C1 1.4477 1.4477 1 2 1ZM3 3L3 10L10 10L10 3Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path clip-rule="evenodd" class="k5enx8bky"/><path class="etf2xkbvu"/></g>`,
		"fallback": "keyline-icons:grid-2x2-plus-sharp-fill",
	});
}

export default Component;
