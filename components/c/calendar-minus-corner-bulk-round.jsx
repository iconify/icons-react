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

.dnw5rsc4p {
  d: path("M9 5a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0Zm8 0a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0ZM4 8h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2m17 9h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2");
}

.ssdm4pbde {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M20 10h-7a3 3 0 0 0-3 3v8a1 1 0 0 1-1 1H8a5 5 0 0 1-5-5V9a5 5 0 0 1 5-5h8c1.33 0 2.597.522 3.536 1.464A5 5 0 0 1 21 9a1 1 0 0 1-1 1");
}
</style><g class="cuyn6tgcc"><path class="ssdm4pbde"/><path class="dnw5rsc4p"/></g>`,
		"fallback": "coolicons:calendar-minus-corner-bulk-round",
	});
}

export default Component;
