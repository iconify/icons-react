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
		"content": `<style>.aa9p6n1gs {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M13 5v2.236A2.98 2.98 0 0 1 11 8H4V3h7a2 2 0 0 1 2 2M4 15V9h14a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2Zm12 4a2 2 0 0 1-2 2H4v-5h10c.741 0 1.449.268 2 .764Z");
}

.ft5dv1b6b {
  fill: none;
}

.v69eobp9s {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 3h7a2 2 0 0 1 2 2v4h5a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2v4a2 2 0 0 1-2 2H4zm0 6h9m-9 6h12");
}
</style><g class="ft5dv1b6b"><path class="aa9p6n1gs"/><path class="v69eobp9s"/></g>`,
		"fallback": "coolicons:chart-bar-horizontal-duotone",
	});
}

export default Component;
