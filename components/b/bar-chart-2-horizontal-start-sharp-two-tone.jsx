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
		"content": `<style>.dog_d0bzi {
  stroke-opacity: 0.4;
  d: path("M1 4L23 4M1 12L16 12");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.kspa2rbdv {
  d: path("M1 20L9 20");
}
</style><g class="gp_8x1bzb"><path class="dog_d0bzi"/><path class="kspa2rbdv"/></g>`,
		"fallback": "keyline-icons:bar-chart-2-horizontal-start-sharp-two-tone",
	});
}

export default Component;
