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
		"content": `<style>.aqxzoygro {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M13 10a3 3 0 0 0-3 3v4a1 1 0 0 1-1 1c-.749 0-1.737.152-2.293.707l-1 1a1.71 1.71 0 0 1-1.498.485c-.461-.078-.866-.328-1.193-.655a3.4 3.4 0 0 1-.732-1.116A3.7 3.7 0 0 1 2 17V7a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v2a1 1 0 0 1-1 1Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.lwpf5wbwd {
  d: path("M18 18a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0Zm-.99 2a1 1 0 0 1 0 2H17a1 1 0 0 1 0-2Z");
}
</style><g class="cuyn6tgcc"><path class="aqxzoygro"/><path class="lwpf5wbwd"/></g>`,
		"fallback": "coolicons:chat-warning-corner-bulk-round",
	});
}

export default Component;
