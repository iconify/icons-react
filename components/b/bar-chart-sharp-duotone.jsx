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
		"content": `<style>.epm6m9bbq {
  stroke-opacity: 0.4;
  d: path("M4 8L4 23M12 1L12 23");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.k4zpahbdz {
  d: path("M20 15L20 23");
}
</style><g class="gp_8x1bzb"><path class="epm6m9bbq"/><path class="k4zpahbdz"/></g>`,
		"fallback": "keyline-icons:bar-chart-sharp-duotone",
	});
}

export default Component;
