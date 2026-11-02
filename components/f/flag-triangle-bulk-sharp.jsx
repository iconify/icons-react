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

.fiojrubzm {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m6.447 2.106l12 6a.998.998 0 0 1 0 1.788l-12 6A1 1 0 0 1 5 15V3a1 1 0 0 1 1.447-.894");
}

.kqrliobak {
  d: path("M7 21a1 1 0 0 1-2 0v-6a1 1 0 0 1 2 0Z");
}
</style><g class="cuyn6tgcc"><path class="fiojrubzm"/><path class="kqrliobak"/></g>`,
		"fallback": "coolicons:flag-triangle-bulk-sharp",
	});
}

export default Component;
