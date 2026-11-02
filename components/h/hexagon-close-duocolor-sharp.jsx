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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p8fnjac2o {
  d: path("M20 12v5l-8 4l-8-4V7l8-4l8 4z");
}

.tocao8blo {
  stroke-opacity: 0.4;
  d: path("m10 10l4 4m0-4l-4 4");
}
</style><g class="nrj6p8qat"><path class="tocao8blo"/><path class="p8fnjac2o"/></g>`,
		"fallback": "coolicons:hexagon-close-duocolor-sharp",
	});
}

export default Component;
