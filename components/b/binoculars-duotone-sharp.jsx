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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.u0l7rru-d {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 16a3 3 0 1 0 6 0a3 3 0 0 0-6 0m12 0a3 3 0 1 0 6 0a3 3 0 0 0-6 0m-6-5h6M3 16c0-3 4-6 4-8V6h2v10m12 0c0-3-4-6-4-8V6h-2v10");
}

.yjbvnfbvm {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M7 8V6h2v10a3 3 0 1 1-6 0c0-3 4-6 4-8m8 8V6h2v2c0 2 4 5 4 8a3 3 0 1 1-6 0");
}
</style><g class="ft5dv1b6b"><path class="yjbvnfbvm"/><path class="u0l7rru-d"/></g>`,
		"fallback": "coolicons:binoculars-duotone-sharp",
	});
}

export default Component;
