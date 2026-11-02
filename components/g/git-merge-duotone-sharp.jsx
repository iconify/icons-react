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

.k_vbi45zq {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 6a2 2 0 1 0 4 0a2 2 0 0 0-4 0m0 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0m14-6a2 2 0 1 0 4 0a2 2 0 0 0-4 0M5 8v8m0-8a4 4 0 0 0 4 4h8");
}

.yp0jklbwc {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M2.236 4.832A3 3 0 1 1 7.763 7.17a3 3 0 0 1-5.527-2.338m14 6a3 3 0 1 1 5.527 2.338a3 3 0 0 1-5.527-2.338m-14 6a3 3 0 1 1 5.527 2.338a3 3 0 0 1-5.527-2.338");
}
</style><g class="ft5dv1b6b"><path class="yp0jklbwc"/><path class="k_vbi45zq"/></g>`,
		"fallback": "coolicons:git-merge-duotone-sharp",
	});
}

export default Component;
