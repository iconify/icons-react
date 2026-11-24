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

.iwmlgmb_p {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M5 4h14a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-9v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1");
}

.sog2wo33c {
  d: path("M9 8a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1Zm4.707 8.293l2.226 2.226l4.299-5.159a1 1 0 1 1 1.536 1.28l-5 6a1 1 0 0 1-1.475.067l-3-3a.999.999 0 1 1 1.414-1.414");
}
</style><g class="cuyn6tgcc"><path class="iwmlgmb_p"/><path class="sog2wo33c"/></g>`,
		"fallback": "coolicons:clipboard-check-corner-bulk-sharp",
	});
}

export default Component;
