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
		"content": `<style>.cllaacb7n {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M14 5a5 5 0 0 1 5 5v4a1 1 0 0 1-2 0v-4a3 3 0 0 0-3-3h-4a1 1 0 0 1 0-2Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.o6whjovqh {
  d: path("M7 6v8a3 3 0 0 0 3 3h11a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2h-7a5 5 0 0 1-5-5V7H3a1 1 0 0 1 0-2h2V3a1 1 0 0 1 2 0Z");
}
</style><g class="cuyn6tgcc"><path class="cllaacb7n"/><path class="o6whjovqh"/></g>`,
		"fallback": "coolicons:crop-bulk-round",
	});
}

export default Component;
