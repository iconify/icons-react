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
		"content": `<style>.dk4_o5c1g {
  stroke-opacity: 0.4;
  d: path("M4 1L4 16M12 1L12 23");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tsngy8x8e {
  d: path("M20 1L20 9");
}
</style><g class="gp_8x1bzb"><path class="dk4_o5c1g"/><path class="tsngy8x8e"/></g>`,
		"fallback": "keyline-icons:bar-chart-down-sharp-duotone",
	});
}

export default Component;
