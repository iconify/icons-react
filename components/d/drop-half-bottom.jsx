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
		"content": `<style>.msuoxz6zh {
  fill: currentColor;
  d: path("M174 47.75a254.2 254.2 0 0 0-41.45-38.3a8 8 0 0 0-9.18 0A254.2 254.2 0 0 0 82 47.75C54.51 79.32 40 112.6 40 144a88 88 0 0 0 176 0c0-31.4-14.51-64.68-42-96.25M187.83 184H68.17a72 72 0 0 1-8-16h135.7a72 72 0 0 1-8.04 16M200 144a71 71 0 0 1-.46 8H56.46a71 71 0 0 1-.46-8q0-4 .36-8h143.28q.36 4 .36 8M128 26c14.16 11.1 56.86 47.74 68.84 94H59.16C71.14 73.76 113.84 37.12 128 26M82.81 200h90.38a71.82 71.82 0 0 1-90.38 0");
}
</style><path class="msuoxz6zh"/>`,
		"fallback": "ph:drop-half-bottom",
	});
}

export default Component;
