import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

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

.kp_v2bbtl {
  d: path("M174 47.75a254.2 254.2 0 0 0-41.45-38.3a8 8 0 0 0-9.18 0A254.2 254.2 0 0 0 82 47.75C54.51 79.32 40 112.6 40 144a88 88 0 0 0 176 0c0-31.4-14.51-64.68-42-96.25M56 144c0-50 42.26-92.71 64-111.4v182.94A72.08 72.08 0 0 1 56 144m80 71.54V32.6C157.74 51.29 200 94 200 144a72.08 72.08 0 0 1-64 71.54");
}

.kqb7ycbay {
  d: path("M208 144a80 80 0 0 1-80 80V16s80 56 80 128");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="kqb7ycbay"/><path class="kp_v2bbtl"/></g>`,
		"fallback": "ph:drop-half-duotone",
	});
}

export default Component;
