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

.uorr6ibyi {
  fill: currentColor;
  d: path("M19 19L19 21C19 21.5523 18.5523 22 18 22L2 22C1.4477 22 1 21.5523 1 21L1 16C1 15.4477 1.4477 15 2 15L15 15L19 19Z");
  stroke: none;
}

.ymzmemm7i {
  d: path("M15 3L16 3C17.6569 3 19 4.3431 19 6L19 7.5C20.6569 7.5 22 8.8431 22 10.5L22 13M19 7.5L16.5 7.5M1.7071 1.7071L22.2929 22.2929");
}
</style><g class="gp_8x1bzb"><path class="uorr6ibyi"/><path class="ymzmemm7i"/></g>`,
		"fallback": "keyline-icons:cigarette-off-sharp-fill",
	});
}

export default Component;
