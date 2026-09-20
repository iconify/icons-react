import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.j5fmm8b8r {
  fill: currentColor;
  d: path("M5.5 2A1.5 1.5 0 0 0 4 3.5V6a2 2 0 0 0-2 2v4.5A1.5 1.5 0 0 0 3.5 14h6a2.5 2.5 0 0 1-.5-1.5v-5c0-.563.186-1.082.5-1.5H5V3.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1.55q.243-.05.5-.05h.5V3.5A1.5 1.5 0 0 0 10.5 2zm-1 7a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m0 2a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1M7 8.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0M6.5 11a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1M10 7.5A1.5 1.5 0 0 1 11.5 6h1A1.5 1.5 0 0 1 14 7.5v5a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5z");
}
</style><path class="j5fmm8b8r"/>`,
		"fallback": "fluent:fax-16-filled",
	});
}

export default Component;
