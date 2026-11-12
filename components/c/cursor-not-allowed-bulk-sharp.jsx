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

.mrq1a3bvw {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m3.316 2.051l12 4a1 1 0 0 1-.073 1.919l-2.287.572l.751.751a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414 0l-.751-.751l-.572 2.287a1 1 0 0 1-1.919.073l-4-12a1.001 1.001 0 0 1 1.265-1.265");
}

.tykr8ozlv {
  d: path("m19.554 13.167l.002.002a4.606 4.606 0 1 1-6.388 1.276l.002-.003a4.6 4.6 0 0 1 6.384-1.275m-4.721 5.281l2.67-4.005a2.605 2.605 0 0 0-2.67 4.005m4.334-2.896l-2.67 4.006a2.607 2.607 0 0 0 2.67-4.006");
}
</style><g class="cuyn6tgcc"><path class="mrq1a3bvw"/><path class="tykr8ozlv"/></g>`,
		"fallback": "coolicons:cursor-not-allowed-bulk-sharp",
	});
}

export default Component;
