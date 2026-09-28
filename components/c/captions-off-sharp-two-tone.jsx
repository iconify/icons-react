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
		"content": `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o_d3irbas {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M21 21L2 21C1.4477 21 1 20.5523 1 20L1 4C1 3.4477 1.4477 3 2 3L3 3ZM6.6569 3L22 3C22.5523 3 23 3.4477 23 4L23 19.3431Z");
  stroke: none;
}

.qnvnj030i {
  d: path("M20 20L2 20L2 4L4 4M10 10C9.5673 9.6754 9.0409 9.5 8.5 9.5C7.1193 9.5 6 10.6193 6 12C6 13.3807 7.1193 14.5 8.5 14.5C9.0409 14.5 9.5673 14.3246 10 14L10.8 13.4M1.7071 1.7071L22.2929 22.2929");
}
</style><g class="gp_8x1bzb"><path class="o_d3irbas"/><path class="qnvnj030i"/></g>`,
		"fallback": "keyline-icons:captions-off-sharp-two-tone",
	});
}

export default Component;
