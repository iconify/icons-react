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
		"content": `<style>.qxfltjbdo {
  fill: currentColor;
  d: path("M209.88 69.83A115.2 115.2 0 0 0 128 36h-.41C63.85 36.22 12 88.76 12 153.13V176a20 20 0 0 0 20 20h192a20 20 0 0 0 20-20v-24a115.25 115.25 0 0 0-34.12-82.17M220 172h-92.68l46.44-65a12 12 0 1 0-19.52-14l-56.42 79H36v-18.87c0-1.72 0-3.43.14-5.13H56a12 12 0 0 0 0-24H40.62c10.91-33.39 40-58.52 75.38-63.21V80a12 12 0 0 0 24 0V60.8a92 92 0 0 1 75.66 63.2H200a12 12 0 0 0 0 24h19.9c.06 1.33.1 2.66.1 4Z");
}
</style><path class="qxfltjbdo"/>`,
		"fallback": "ph:gauge-bold",
	});
}

export default Component;
