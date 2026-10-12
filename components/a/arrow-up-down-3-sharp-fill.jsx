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
		"content": `<style>.qhqv4_b2h {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 14L7 13L7 2.7396L7 2.0856M12.3005 7.1888L12 6.8947L7 2L2 6.8947L1.6995 7.1888M17 10L17 11L17 21.2604L17 21.9144M11.6995 16.8112L12 17.1053L17 22L22 17.1053L22.3005 16.8112");
}
</style><path class="qhqv4_b2h"/>`,
		"fallback": "keyline-icons:arrow-up-down-3-sharp-fill",
	});
}

export default Component;
