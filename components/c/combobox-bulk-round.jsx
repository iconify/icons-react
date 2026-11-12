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

.so9fd82_h {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4Zm0 11a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Z");
}

.zp_nyr2da {
  d: path("M8 8a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0Zm8-1.414l1.293-1.293a.999.999 0 1 1 1.414 1.414l-2 2a1 1 0 0 1-1.414 0l-2-2a.999.999 0 1 1 1.414-1.414ZM7 17h10a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2");
}
</style><g class="cuyn6tgcc"><path class="so9fd82_h"/><path class="zp_nyr2da"/></g>`,
		"fallback": "coolicons:combobox-bulk-round",
	});
}

export default Component;
