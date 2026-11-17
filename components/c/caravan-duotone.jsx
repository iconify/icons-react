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

.so5wpjb_z {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 18H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-3m-5-8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1Zm1 8a2 2 0 1 0 4 0a2 2 0 0 0-4 0m9-3h4");
}

.wl66p43ll {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M5 5h10a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-3a1.999 1.999 0 0 0-3-1.732c-.619.357-1 1.017-1 1.732H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2");
}
</style><g class="ft5dv1b6b"><path class="wl66p43ll"/><path class="so5wpjb_z"/></g>`,
		"fallback": "coolicons:caravan-duotone",
	});
}

export default Component;
