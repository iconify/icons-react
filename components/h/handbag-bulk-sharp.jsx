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
		"content": `<style>.bv1i1bcfy {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M19 7c.489 0 .906.353.986.836l2 12A.998.998 0 0 1 21 21H3a.998.998 0 0 1-.986-1.164l2-12A1 1 0 0 1 5 7Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.r1ciqdbuo {
  d: path("M7.393 6.053A5 5 0 0 1 17 8a1 1 0 0 1-2 0a2.998 2.998 0 0 0-4.962-2.269A3 3 0 0 0 9 8a1 1 0 0 1-2 0a5 5 0 0 1 .393-1.947");
}
</style><g class="cuyn6tgcc"><path class="bv1i1bcfy"/><path class="r1ciqdbuo"/></g>`,
		"fallback": "coolicons:handbag-bulk-sharp",
	});
}

export default Component;
