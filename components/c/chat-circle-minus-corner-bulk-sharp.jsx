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

.gqtzinbhr {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M20 9H9v11a1 1 0 0 1-.804.981l-5 1a1 1 0 0 1-1.177-1.177l.935-4.673a9.943 9.943 0 0 1 17.94-8.578A1 1 0 0 1 20 9");
}

.pk5s7xkzd {
  d: path("M13 15h8a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2");
}
</style><g class="cuyn6tgcc"><path class="gqtzinbhr"/><path class="pk5s7xkzd"/></g>`,
		"fallback": "coolicons:chat-circle-minus-corner-bulk-sharp",
	});
}

export default Component;
