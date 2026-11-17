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
		"content": `<style>.ah77tub-x {
  d: path("M6 11h12a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2");
}

.cuyn6tgcc {
  fill: currentColor;
}

.l7tytwbki {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M5 2h14a1 1 0 0 1 .994 1.11l-2 18A1 1 0 0 1 17 22H7a1 1 0 0 1-.994-.89l-2-18A1 1 0 0 1 5 2");
}
</style><g class="cuyn6tgcc"><path class="l7tytwbki"/><path class="ah77tub-x"/></g>`,
		"fallback": "coolicons:glass-water-bulk-sharp",
	});
}

export default Component;
