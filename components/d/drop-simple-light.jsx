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
		"content": `<style>.hhq1nt41x {
  fill: currentColor;
  d: path("M172.53 49.06a251.4 251.4 0 0 0-41.09-38a6 6 0 0 0-6.88 0a251.4 251.4 0 0 0-41.09 38C56.34 80.26 42 113.09 42 144a86 86 0 0 0 172 0c0-30.91-14.34-63.74-41.47-94.94M128 218a74.09 74.09 0 0 1-74-74c0-59.62 59-108.93 74-120.51c15 11.58 74 60.89 74 120.51a74.09 74.09 0 0 1-74 74");
}
</style><path class="hhq1nt41x"/>`,
		"fallback": "ph:drop-simple-light",
	});
}

export default Component;
