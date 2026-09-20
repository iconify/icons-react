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
		"content": `<style>.hszv4xb1x {
  fill: currentColor;
  d: path("M184 28a11.9 11.9 0 0 0-3.45.51l-160 48A12 12 0 0 0 12 88v24a12 12 0 0 0 12 12h8a12.07 12.07 0 0 1 12 11.76a11.6 11.6 0 0 1-3.43 8.38a12.88 12.88 0 0 1-9.11 3.86H24a12 12 0 0 0-12 12v32a12 12 0 0 0 12 12h200a20 20 0 0 0 20-20V88a60.07 60.07 0 0 0-60-60m1.64 24a36.06 36.06 0 0 1 32.3 24H105.76ZM152 100h32v4a16 16 0 0 1-32 0Zm-56 80a16 16 0 0 1 32 0Zm124 0h-68a40 40 0 0 0-80 0H36v-8.29A37.1 37.1 0 0 0 57.7 161A35.4 35.4 0 0 0 68 135.31a36.21 36.21 0 0 0-32-35.09V100h92v4a40 40 0 0 0 80 0v-4h12Z");
}
</style><path class="hszv4xb1x"/>`,
		"fallback": "ph:cheese-bold",
	});
}

export default Component;
