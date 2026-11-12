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

.msqof81ac {
  d: path("M10 10c0-.265.105-.52.293-.707l5-5a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-5 5A1 1 0 0 1 14 14h-3a1 1 0 0 1-1-1Zm-6.707 5.293a2.415 2.415 0 0 1 3.414 0l5 5a.999.999 0 1 1-1.414 1.414l-5-5a.415.415 0 0 0-.586 0l-1 1a.999.999 0 1 1-1.414-1.414Z");
}

.wr_1xqtvh {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M17 2a5 5 0 0 1 5 5v10a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 22H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z");
}
</style><g class="cuyn6tgcc"><path class="wr_1xqtvh"/><path class="msqof81ac"/></g>`,
		"fallback": "coolicons:image-edit-bulk-round",
	});
}

export default Component;
