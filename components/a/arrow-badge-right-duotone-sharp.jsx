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

.gobf1z2pp {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 19H4l7-7l-7-7h9l7 7l-7 7z");
}

.rwdnrfthi {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m4 19l7-7l-7-7h9l7 7l-7 7Z");
}
</style><g class="ft5dv1b6b"><path class="rwdnrfthi"/><path class="gobf1z2pp"/></g>`,
		"fallback": "coolicons:arrow-badge-right-duotone-sharp",
	});
}

export default Component;
