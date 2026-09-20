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
		"content": `<style>.cftevbcvj {
  fill: currentColor;
  d: path("M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 176A72 72 0 0 1 92 65.64a8 8 0 0 1 8 13.85a56 56 0 1 0 56 0a8 8 0 0 1 8-13.85A72 72 0 0 1 128 200");
}
</style><path class="cftevbcvj"/>`,
		"fallback": "ph:circle-notch-fill",
	});
}

export default Component;
