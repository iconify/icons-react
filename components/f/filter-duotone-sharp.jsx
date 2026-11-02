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

.icwwzo_bg {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M20 4v2l-6 6v6l-4 2v-8L4 6V4Z");
}

.w9zcwz20r {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 4h8v2l-6 6v6l-4 2v-8L4 6V4z");
}
</style><g class="ft5dv1b6b"><path class="icwwzo_bg"/><path class="w9zcwz20r"/></g>`,
		"fallback": "coolicons:filter-duotone-sharp",
	});
}

export default Component;
