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
		"content": `<style>.zx6plq8ip {
  fill: currentColor;
  d: path("M156 18a74.21 74.21 0 0 0-69.89 49.3a6.2 6.2 0 0 0-1.83-.62A51 51 0 0 0 76 66a50 50 0 0 0 0 100h41.4l-18.55 30.91A6 6 0 0 0 104 206h29.4l-18.55 30.91a6 6 0 0 0 10.3 6.18l24-40A6 6 0 0 0 144 194h-29.4l16.8-28H156a74 74 0 0 0 0-148m0 136H76a38 38 0 1 1 6.31-75.48a7 7 0 0 0 .79.08a73 73 0 0 0-1.1 9.05a6 6 0 0 0 12 .7A62.06 62.06 0 1 1 156 154");
}
</style><path class="zx6plq8ip"/>`,
		"fallback": "ph:cloud-lightning-light",
	});
}

export default Component;
