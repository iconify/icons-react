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
		"content": `<style>.buk7lbbdc {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M5 3h14v16H5Z");
}

.ft5dv1b6b {
  fill: none;
}

.obl6whgki {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 3h14v16H5zm2 16h2v2H7Zm8 0h2v2h-2ZM5 13h14M9 6h6M8 16h.01M16 16h.01");
}
</style><g class="ft5dv1b6b"><path class="buk7lbbdc"/><path class="obl6whgki"/></g>`,
		"fallback": "coolicons:bus-duotone-sharp",
	});
}

export default Component;
