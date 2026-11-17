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
		"content": `<style>.ccf5q0x9o {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M10 7v13c-.002 1.002-1.998 1.002-2 0V10H6c-1.995-.001-2.999-1.005-3-3c.001-1.995 1.005-2.999 3-3c1.815.001 3.998.881 4 3m8 3h-2v10c-.002 1.002-1.998 1.002-2 0V7c.002-2.119 2.185-2.999 4-3c1.995.001 2.999 1.005 3 3c-.001 1.995-1.005 2.999-3 3");
}

.ft5dv1b6b {
  fill: none;
}

.ppbm5y1-m {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 4c2 0 4 1 4 3v13c0 1-2 1-2 0V10H6q-3 0-3-3t3-3m12 0c-2 0-4 1-4 3v13c0 1 2 1 2 0V10h2q3 0 3-3t-3-3M6 7h.01M18 7h.01");
}
</style><g class="ft5dv1b6b"><path class="ccf5q0x9o"/><path class="ppbm5y1-m"/></g>`,
		"fallback": "coolicons:earbuds-duotone-sharp",
	});
}

export default Component;
