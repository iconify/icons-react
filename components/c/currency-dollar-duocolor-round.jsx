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
		"content": `<style>.briar8btq {
  stroke-opacity: 0.4;
  d: path("M12 3v2m0 14v2");
}

.gsysomb_d {
  d: path("M17 8a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v1a3 3 0 0 0 3 3h4a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="briar8btq"/><path class="gsysomb_d"/></g>`,
		"fallback": "coolicons:currency-dollar-duocolor-round",
	});
}

export default Component;
