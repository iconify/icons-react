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
		"content": `<style>.pu4l76-9s {
  fill: currentColor;
  d: path("M220 48v40a12 12 0 0 1-24 0V60h-28a12 12 0 0 1 0-24h40a12 12 0 0 1 12 12M88 196H60v-28a12 12 0 0 0-24 0v40a12 12 0 0 0 12 12h40a12 12 0 0 0 0-24m120-40a12 12 0 0 0-12 12v28h-28a12 12 0 0 0 0 24h40a12 12 0 0 0 12-12v-40a12 12 0 0 0-12-12M88 36H48a12 12 0 0 0-12 12v40a12 12 0 0 0 24 0V60h28a12 12 0 0 0 0-24");
}
</style><path class="pu4l76-9s"/>`,
		"fallback": "ph:corners-out-bold",
	});
}

export default Component;
