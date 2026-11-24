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

.rgwj2d5qw {
  d: path("M3 8h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2m18 7a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2Z");
}

.ywi0h9bjw {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M22 9H10v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1Z");
}
</style><g class="cuyn6tgcc"><path class="ywi0h9bjw"/><path class="rgwj2d5qw"/></g>`,
		"fallback": "coolicons:credit-card-minus-corner-bulk-sharp",
	});
}

export default Component;
