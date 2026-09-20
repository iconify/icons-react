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
		"content": `<style>.cqf3vabrk {
  fill: currentColor;
  d: path("M184 208a16 16 0 1 1-16-16a16 16 0 0 1 16 16m-64-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16m-48 0a16 16 0 1 0 16 16a16 16 0 0 0-16-16M236 92a80.09 80.09 0 0 1-80 80H76a56 56 0 0 1 0-112a57 57 0 0 1 6.39.36A80.08 80.08 0 0 1 236 92m-24 0a56.06 56.06 0 0 0-112-3.31a12 12 0 1 1-24-1.38c.06-1.11.15-2.21.26-3.31H76a32 32 0 0 0 0 64h80a56.06 56.06 0 0 0 56-56");
}
</style><path class="cqf3vabrk"/>`,
		"fallback": "ph:cloud-snow-bold",
	});
}

export default Component;
