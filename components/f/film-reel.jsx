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
		"content": `<style>.pduq0ebkk {
  fill: currentColor;
  d: path("M232 216h-48.64A103.95 103.95 0 1 0 128 232h104a8 8 0 0 0 0-16M40 128a88 88 0 1 1 88 88a88.1 88.1 0 0 1-88-88m88-24a24 24 0 1 0-24-24a24 24 0 0 0 24 24m0-32a8 8 0 1 1-8 8a8 8 0 0 1 8-8m24 104a24 24 0 1 0-24 24a24 24 0 0 0 24-24m-32 0a8 8 0 1 1 8 8a8 8 0 0 1-8-8m56-24a24 24 0 1 0-24-24a24 24 0 0 0 24 24m0-32a8 8 0 1 1-8 8a8 8 0 0 1 8-8m-96-16a24 24 0 1 0 24 24a24 24 0 0 0-24-24m0 32a8 8 0 1 1 8-8a8 8 0 0 1-8 8");
}
</style><path class="pduq0ebkk"/>`,
		"fallback": "ph:film-reel",
	});
}

export default Component;
