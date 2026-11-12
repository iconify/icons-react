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

.kunlpz4es {
  d: path("M3 8h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2m8 9v-.002a6 6 0 1 1 12-.004a6 6 0 0 1-12 .008Zm2.02.403a4 4 0 1 0 7.96-.806a4 4 0 0 0-7.96.806M19 18h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2");
}

.ywi0h9bjw {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M22 9H10v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1Z");
}
</style><g class="cuyn6tgcc"><path class="ywi0h9bjw"/><path class="kunlpz4es"/></g>`,
		"fallback": "coolicons:credit-card-clock-corner-bulk-sharp",
	});
}

export default Component;
