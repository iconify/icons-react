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
		"content": `<style>.e08jvybqs {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M2.236 4.832A3 3 0 1 1 7.763 7.17a3 3 0 0 1-5.527-2.338m14 12a3 3 0 1 1 5.527 2.338a3 3 0 0 1-5.527-2.338");
}

.ft5dv1b6b {
  fill: none;
}

.nzsnzi8yj {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 6a2 2 0 1 0 4 0a2 2 0 0 0-4 0m14 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0m2-2V6h-8m3-3l-3 3l3 3M5 8v10h8m-3-3l3 3l-3 3");
}
</style><g class="ft5dv1b6b"><path class="e08jvybqs"/><path class="nzsnzi8yj"/></g>`,
		"fallback": "coolicons:git-compare-duotone-sharp",
	});
}

export default Component;
