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
		"content": `<style>.a-6bkrb8q {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M5 3h14v3h-2v12h2v3H5v-3h2V6H5Z");
}

.a14y44bqu {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 3h14v3h-2v12h2v3H5v-3h2V6H5zm8 5l-3 4h4l-3 4");
}

.ft5dv1b6b {
  fill: none;
}
</style><g class="ft5dv1b6b"><path class="a-6bkrb8q"/><path class="a14y44bqu"/></g>`,
		"fallback": "coolicons:fuse-duotone-sharp",
	});
}

export default Component;
