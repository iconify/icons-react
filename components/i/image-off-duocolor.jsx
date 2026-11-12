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
		"content": `<style>.iwm20oage {
  d: path("M20.414 20.414A2 2 0 0 1 19 21H5a2 2 0 0 1-2-2V5c0-.552.224-1.052.586-1.414M9 3h10a2 2 0 0 1 2 2v10");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.zf5-chd9w {
  stroke-opacity: 0.4;
  d: path("m3 17l7-7m6-3a1 1 0 1 0 2 0a1 1 0 0 0-2 0M2 2l20 20");
}
</style><g class="nrj6p8qat"><path class="zf5-chd9w"/><path class="iwm20oage"/></g>`,
		"fallback": "coolicons:image-off-duocolor",
	});
}

export default Component;
