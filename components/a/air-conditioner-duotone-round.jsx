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

.oj2u49b6k {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 7a4 4 0 0 1 4-4h10a4 4 0 1 1 0 8H7a4 4 0 0 1-4-4m4 1h10m-9 7a3 3 0 0 1-3 3m11-3a3 3 0 0 0 3 3m-7-3v6");
}

.yc3ht8bti {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M7 3h10a4 4 0 0 1 0 8H7a4 4 0 0 1 0-8");
}
</style><g class="ft5dv1b6b"><path class="yc3ht8bti"/><path class="oj2u49b6k"/></g>`,
		"fallback": "coolicons:air-conditioner-duotone-round",
	});
}

export default Component;
