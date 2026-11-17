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

.xih8zubbn {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M17.714 8H12a4 4 0 0 0-4 4v9a4 4 0 0 1-4-4v-5.185a4 4 0 0 1 1.366-3.01l4-3.5a4 4 0 0 1 5.268 0Z");
}

.zmjpmdk2n {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 21a4 4 0 0 1-4-4v-5.185a4 4 0 0 1 1.366-3.01l4-3.5a4 4 0 0 1 5.268 0L17.714 8M17 21h-4l1-8h3m0 0h3l1 8h-4m-3-4h6m-3-4v8");
}
</style><g class="ft5dv1b6b"><path class="xih8zubbn"/><path class="zmjpmdk2n"/></g>`,
		"fallback": "coolicons:house-solar-panel-corner-duotone-round",
	});
}

export default Component;
