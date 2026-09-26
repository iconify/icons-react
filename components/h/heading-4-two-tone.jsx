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
		"content": `<style>.fx3ouxv1x {
  d: path("M17 13V17.5H22M21 13V20");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.walbv2b5n {
  stroke-opacity: 0.4;
  d: path("M2 4V20M11 4V20M2 12H11");
}
</style><g class="nrj6p8qat"><path class="walbv2b5n"/><path class="fx3ouxv1x"/></g>`,
		"fallback": "keyline-icons:heading-4-two-tone",
	});
}

export default Component;
