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
		"content": `<style>.j_9dhi_jj {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M22 8v8a6 6 0 0 1-6 6h-4c-1.039 0-1.992-.578-2.707-1.293l-6-6a2 2 0 0 1 2.828-2.828L8 13.757V7a1.999 1.999 0 0 1 3.001-1.732C11.619 5.626 12 6.285 12 7v5a.5.5 0 0 0 1 0V5a2.001 2.001 0 0 1 4 0v7a.5.5 0 0 0 1 0V8c0-.353.09-.695.268-1l.001-.003A2 2 0 0 1 22 8");
}
</style><path class="j_9dhi_jj"/>`,
		"fallback": "coolicons:hand-bulk-round",
	});
}

export default Component;
