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
		"content": `<style>.eyyts0bbv {
  d: path("M2 17a4 4 0 1 1 8 0m0 0a4 4 0 1 1-8 0m12 0a4 4 0 1 1 8 0m0 0a4 4 0 1 1-8 0m-8 0L9 5M8 9h8m2 8L15 5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rsirlo2lt {
  stroke-opacity: 0.4;
  d: path("M6 5h4m5 0h3a2 2 0 0 1 2 2");
}
</style><g class="nrj6p8qat"><path class="rsirlo2lt"/><path class="eyyts0bbv"/></g>`,
		"fallback": "coolicons:bike-duocolor",
	});
}

export default Component;
