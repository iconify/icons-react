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

.krucdhb2u {
  d: path("M13.707 6.293L15 7.586l1.293-1.293a.999.999 0 1 1 1.414 1.414L16.414 9l1.293 1.293a.999.999 0 1 1-1.414 1.414L15 10.414l-1.293 1.293a.999.999 0 1 1-1.414-1.414L13.586 9l-1.293-1.293a.999.999 0 1 1 1.414-1.414m-11.414 10l4-4a1 1 0 0 1 1.414 0l8 8a.999.999 0 1 1-1.414 1.414L7 14.414l-3.293 3.293a.999.999 0 1 1-1.414-1.414");
}

.td1bzxb2d {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 2h18a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1");
}
</style><g class="cuyn6tgcc"><path class="td1bzxb2d"/><path class="krucdhb2u"/></g>`,
		"fallback": "coolicons:image-close-bulk-sharp",
	});
}

export default Component;
