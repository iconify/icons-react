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
		"content": `<style>.bvpe1-nac {
  d: path("M16 20L22 20");
}

.i0tm_6p0q {
  stroke-opacity: 0.4;
  d: path("M2 4L22 4M9 12L22 12");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="i0tm_6p0q"/><path class="bvpe1-nac"/></g>`,
		"fallback": "keyline-icons:bar-chart-2-horizontal-end-two-tone",
	});
}

export default Component;
