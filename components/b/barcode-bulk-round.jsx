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

.fqh0zy0bn {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M9 19a1 1 0 0 1-2 0V5a1 1 0 0 1 2 0Zm8 0a1 1 0 0 1-2 0V5a1 1 0 0 1 2 0Z");
}

.jqd5i3btc {
  d: path("M5 19a1 1 0 0 1-2 0V5a1 1 0 0 1 2 0Zm8 0a1 1 0 0 1-2 0V5a1 1 0 0 1 2 0Zm8 0a1 1 0 0 1-2 0V5a1 1 0 0 1 2 0Z");
}
</style><g class="cuyn6tgcc"><path class="fqh0zy0bn"/><path class="jqd5i3btc"/></g>`,
		"fallback": "coolicons:barcode-bulk-round",
	});
}

export default Component;
