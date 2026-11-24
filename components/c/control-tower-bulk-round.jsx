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

.e3i2-rvya {
  d: path("M11 3a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0Zm10 19H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2");
}

.ocxxgzrdw {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M17 14h-1v7a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-7H7a1 1 0 0 1-.832-.445l-2-3a4.9 4.9 0 0 1-.603-1.266c-.31-.991-.38-2.44.629-3.064C4.437 6.076 4.715 6 5 6h14c.285 0 .563.076.806.225c1.009.624.939 2.073.629 3.064a4.9 4.9 0 0 1-.603 1.266l-2 3A1 1 0 0 1 17 14M7.279 8h-1.41a.535.535 0 0 0-.446.832L7.535 12h1.078Zm2.108 0l1.334 4h2.558l1.334-4Zm7.078 4l1.703-2.555l.001-.001l.408-.612A.534.534 0 0 0 18.131 8h-1.41l-1.334 4Z");
}
</style><g class="cuyn6tgcc"><path class="ocxxgzrdw"/><path class="e3i2-rvya"/></g>`,
		"fallback": "coolicons:control-tower-bulk-round",
	});
}

export default Component;
