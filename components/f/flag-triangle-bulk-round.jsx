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

.kqrliobak {
  d: path("M7 21a1 1 0 0 1-2 0v-6a1 1 0 0 1 2 0Z");
}

.un8cxoenf {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M5 7c0-.633.184-1.247.536-1.774a3.44 3.44 0 0 1 1.328-1.154c1.126-.563 2.463-.526 3.583.034l4 2a3.234 3.234 0 0 1 0 5.788l-8 4A1 1 0 0 1 5 15Z");
}
</style><g class="cuyn6tgcc"><path class="un8cxoenf"/><path class="kqrliobak"/></g>`,
		"fallback": "coolicons:flag-triangle-bulk-round",
	});
}

export default Component;
