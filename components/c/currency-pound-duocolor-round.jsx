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

.pwrx49byc {
  d: path("M17 9a4 4 0 1 0-8 0v10m-3 0h12");
}

.xi553kbjw {
  stroke-opacity: 0.4;
  d: path("M6 14h3m0 0h4");
}
</style><g class="nrj6p8qat"><path class="xi553kbjw"/><path class="pwrx49byc"/></g>`,
		"fallback": "coolicons:currency-pound-duocolor-round",
	});
}

export default Component;
