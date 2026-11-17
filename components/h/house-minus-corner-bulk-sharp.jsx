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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.fn6lefoka {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m12.659 2.247l5.714 5A1.001 1.001 0 0 1 17.714 9H9v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10c0-.288.124-.563.341-.753l8-7c.378-.329.94-.329 1.318 0");
}

.pk5s7xkzd {
  d: path("M13 15h8a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2");
}
</style><g class="cuyn6tgcc"><path class="fn6lefoka"/><path class="pk5s7xkzd"/></g>`,
		"fallback": "coolicons:house-minus-corner-bulk-sharp",
	});
}

export default Component;
