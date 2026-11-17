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

.qbxlnbx-c {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M19 7a2 2 0 0 1 2 2v2l-4 6H7l-4-6V9a2 2 0 0 1 2-2Z");
}

.w1yyuzw7k {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 7h7a2 2 0 0 1 2 2v2l-4 6H7l-4-6V9a2 2 0 0 1 2-2zm-4 4h8");
}
</style><g class="ft5dv1b6b"><path class="qbxlnbx-c"/><path class="w1yyuzw7k"/></g>`,
		"fallback": "coolicons:hdmi-duotone-round",
	});
}

export default Component;
