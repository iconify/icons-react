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

.g5qq-wbmx {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M23 10L23 21C23 21.5523 22.5523 22 22 22L2 22C1.4477 22 1 21.5523 1 21L1 7L3 7L3 9L5 9L5 2L7 2L7 4L11 4L11 2L13 2L13 4L17 4L17 2L19 2L19 9L21 9L21 7L23 7L23 10Z");
}

.k81ybob-i {
  fill-rule: evenodd;
  d: path("M15 20L9 20L9 16.5C9 15.3954 10.8954 14 12 14C13.1046 14 15 15.3954 15 16.5L15 20Z");
}
</style><g class="cuyn6tgcc"><path class="g5qq-wbmx"/><path clip-rule="evenodd" class="k81ybob-i"/></g>`,
		"fallback": "keyline-icons:castle-sharp-duotone",
	});
}

export default Component;
