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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.i8zck-5fm {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13 3H5v18h14V9m-6-6l6 6m-6-6v6h6M9 15l2 2l4-4");
}

.im5zac-eg {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M5 3h8l.034.034q-.01-.01-.022-.004a.02.02 0 0 0-.012.018V9h5.952a.02.02 0 0 0 .018-.012q.006-.012-.004-.022L19 9v12H5Z");
}
</style><g class="ft5dv1b6b"><path class="im5zac-eg"/><path class="i8zck-5fm"/></g>`,
		"fallback": "coolicons:file-check-duotone-sharp",
	});
}

export default Component;
