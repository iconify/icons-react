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

.srbh4vsje {
  d: path("M2 21V3a1 1 0 0 1 2 0v18a1 1 0 0 1-2 0m3-10a3 3 0 1 1 6 0a3 3 0 0 1-6 0m8 0a3 3 0 1 1 6 0a3 3 0 0 1-6 0m-6 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0m8 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0m1 9v-3a1 1 0 0 1 2 0v3a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-3a1 1 0 0 1 2 0v3Z");
}

.vz17bk4xp {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 7a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Z");
}
</style><g class="cuyn6tgcc"><path class="vz17bk4xp"/><path class="srbh4vsje"/></g>`,
		"fallback": "coolicons:graphics-card-bulk",
	});
}

export default Component;
