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
		"content": `<style>.i5ypyoehl {
  stroke-opacity: 0.4;
  d: path("M2 12L22 12M9 20L22 20");
}

.l12_cmb5r {
  d: path("M16 4L22 4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="i5ypyoehl"/><path class="l12_cmb5r"/></g>`,
		"fallback": "keyline-icons:bar-chart-horizontal-end-duotone",
	});
}

export default Component;
