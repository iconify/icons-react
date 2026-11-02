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

.d23djdbts {
  d: path("M7 6v10a1 1 0 0 0 1 1h13a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2H8a3 3 0 0 1-3-3V7H3a1 1 0 0 1 0-2h2V3a1 1 0 0 1 2 0Z");
}

.y32rrcc0n {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M16 5a3 3 0 0 1 3 3v6a1 1 0 0 1-2 0V8a1 1 0 0 0-1-1h-6a1 1 0 0 1 0-2Z");
}
</style><g class="cuyn6tgcc"><path class="y32rrcc0n"/><path class="d23djdbts"/></g>`,
		"fallback": "coolicons:crop-bulk",
	});
}

export default Component;
