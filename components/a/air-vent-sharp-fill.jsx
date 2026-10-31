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
		"content": `<style>.g__jkfb-j {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2 2L22 2C22.5523 2 23 2.4477 23 3L23 13C23 13.5523 22.5523 14 22 14L2 14C1.4477 14 1 13.5523 1 13L1 3C1 2.4477 1.4477 2 2 2ZM5 8L5 10L19 10L19 8L5 8Z");
  stroke: none;
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.jmbw-ozya {
  d: path("M14 12L14 19C14 20.1046 14.8954 21 16 21C17.1046 21 18 20.1046 18 19L18 17M9.5 12L9.5 17C9.5 18.1046 8.6046 19 7.5 19C6.3954 19 5.5 18.1046 5.5 17L5.5 16");
}
</style><g class="gp_8x1bzb"><path clip-rule="evenodd" class="g__jkfb-j"/><path class="jmbw-ozya"/></g>`,
		"fallback": "keyline-icons:air-vent-sharp-fill",
	});
}

export default Component;
