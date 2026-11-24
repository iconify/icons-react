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
		"content": `<style>.evangtbzc {
  stroke-opacity: 0.4;
  d: path("M6 13v4m4-4v4m4-4v4m4-4v4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.y6x97f7ij {
  d: path("M3 9h18M5 9c0-3.314 3.134-6 7-6s7 2.686 7 6M3 21h18");
}
</style><g class="nrj6p8qat"><path class="evangtbzc"/><path class="y6x97f7ij"/></g>`,
		"fallback": "coolicons:building-dome-duocolor",
	});
}

export default Component;
