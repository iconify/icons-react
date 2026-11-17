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

.t6qaodbds {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m10 4l2 2h3a4 4 0 0 1 4 4v1c.984 0 1.492 1.524 1 3l-1 3c-.577 1.728-2.149 2.999-4 3H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z");
}

.x6qcjyb9w {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m5 20l2-6c.597-1.792 2.208-3 4-3h8c.984 0 1.492 1.524 1 3l-1 3c-.597 1.792-2.208 3-4 3zm14-9v-1a4 4 0 0 0-4-4h-3l-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2");
}
</style><g class="ft5dv1b6b"><path class="t6qaodbds"/><path class="x6qcjyb9w"/></g>`,
		"fallback": "coolicons:folder-open-duotone-round",
	});
}

export default Component;
