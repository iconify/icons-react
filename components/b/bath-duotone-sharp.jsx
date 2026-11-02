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
		"content": `<style>.exw-kcbob {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 12h18M5 12v6h14v-6M8 18v2m8-2v2M5 12V4h4v2");
}

.ft5dv1b6b {
  fill: none;
}

.r-yn5_b4n {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M4 18v-6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1");
}
</style><g class="ft5dv1b6b"><path class="r-yn5_b4n"/><path class="exw-kcbob"/></g>`,
		"fallback": "coolicons:bath-duotone-sharp",
	});
}

export default Component;
