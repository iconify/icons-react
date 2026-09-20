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
		"content": `<style>.wz7ppbi9k {
  fill: currentColor;
  d: path("M228 128a100 100 0 1 1-22.86-63.64a12 12 0 0 1-18.51 15.28A76 76 0 1 0 203.05 140H128a12 12 0 0 1 0-24h88a12 12 0 0 1 12 12");
}
</style><path class="wz7ppbi9k"/>`,
		"fallback": "ph:google-logo-bold",
	});
}

export default Component;
