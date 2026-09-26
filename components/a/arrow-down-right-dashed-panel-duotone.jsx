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
		"content": `<style>.h5xvq-byq {
  d: path("M11.5 21L20.5 21C20.7761 21 21 20.7761 21 20.5L21 11.5M11.5 11.5L20.5 20.5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ojh85yurv {
  stroke-opacity: 0.4;
  d: path("M3 6C3 4.3431 4.3431 3 6 3M10.5 3L13.5 3M21 7L21 6.0003C21 4.3434 19.6569 3 18 3M7 21L6 21C4.3431 21 3 19.6569 3 18M3 10.5L3 13.5");
}
</style><g class="nrj6p8qat"><path class="ojh85yurv"/><path class="h5xvq-byq"/></g>`,
		"fallback": "keyline-icons:arrow-down-right-dashed-panel-duotone",
	});
}

export default Component;
