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
		"content": `<style>.o4jt1bbgr {
  fill: currentColor;
  d: path("M224.28 141a100.6 100.6 0 0 0-31.4-49H240a12 12 0 0 0 0-24h-78.06a36 36 0 0 0-67.88 0H16a12 12 0 0 0 0 24h47.12a100.6 100.6 0 0 0-31.4 49A36 36 0 1 0 56 143.74a76.66 76.66 0 0 1 41.15-45.21a36 36 0 0 0 61.7 0A76.66 76.66 0 0 1 200 143.74a36 36 0 1 0 24.28-2.74M40 188a12 12 0 1 1 12-12a12 12 0 0 1-12 12m88-96a12 12 0 1 1 12-12a12 12 0 0 1-12 12m88 96a12 12 0 1 1 12-12a12 12 0 0 1-12 12");
}
</style><path class="o4jt1bbgr"/>`,
		"fallback": "ph:bezier-curve-bold",
	});
}

export default Component;
