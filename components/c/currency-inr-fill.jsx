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
		"content": `<style>.d1g0qmyba {
  fill: currentColor;
  d: path("M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m38.32 72H176a8 8 0 0 1 0 16h-8.19A44.06 44.06 0 0 1 124 152h-12.68l53.59 41.69a8 8 0 1 1-9.82 12.62l-72-56A8 8 0 0 1 88 136h36a28 28 0 0 0 27.71-24H88a8 8 0 0 1 0-16h61.29A28 28 0 0 0 124 80H88a8 8 0 0 1 0-16h88a8 8 0 0 1 0 16h-18.08a43.9 43.9 0 0 1 8.4 16");
}
</style><path class="d1g0qmyba"/>`,
		"fallback": "ph:currency-inr-fill",
	});
}

export default Component;
