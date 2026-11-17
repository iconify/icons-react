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

.lnc4yxvtn {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 13h18v6H3Zm4 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2");
}

.tstsy3b5j {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m3 13l4-8h10l4 8v6H3zm0 0h18M7 16h.01M11 16h.01");
}
</style><g class="ft5dv1b6b"><path class="lnc4yxvtn"/><path class="tstsy3b5j"/></g>`,
		"fallback": "coolicons:hard-drive-duotone-sharp",
	});
}

export default Component;
