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
		"content": `<style>.zrk08pb_p {
  fill: currentColor;
  d: path("m228.24 172.24l-48 48a6 6 0 0 1-8.48-8.48L209.51 174H88a62 62 0 0 1 0-124h88a6 6 0 0 1 0 12H88a50 50 0 0 0 0 100h121.51l-37.75-37.76a6 6 0 0 1 8.48-8.48l48 48a6 6 0 0 1 0 8.48");
}
</style><path class="zrk08pb_p"/>`,
		"fallback": "ph:arrow-u-down-right-light",
	});
}

export default Component;
