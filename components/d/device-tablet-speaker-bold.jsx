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
		"content": `<style>.igqsfzb5z {
  fill: currentColor;
  d: path("M192 20H64a28 28 0 0 0-28 28v160a28 28 0 0 0 28 28h128a28 28 0 0 0 28-28V48a28 28 0 0 0-28-28m4 188a4 4 0 0 1-4 4H64a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h128a4 4 0 0 1 4 4ZM172 72a12 12 0 0 1-12 12H96a12 12 0 0 1 0-24h64a12 12 0 0 1 12 12");
}
</style><path class="igqsfzb5z"/>`,
		"fallback": "ph:device-tablet-speaker-bold",
	});
}

export default Component;
