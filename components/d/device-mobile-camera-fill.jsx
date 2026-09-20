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
		"content": `<style>.gx3qayd4p {
  fill: currentColor;
  d: path("M176 16H80a24 24 0 0 0-24 24v176a24 24 0 0 0 24 24h96a24 24 0 0 0 24-24V40a24 24 0 0 0-24-24m-48 56a12 12 0 1 1 12-12a12 12 0 0 1-12 12");
}
</style><path class="gx3qayd4p"/>`,
		"fallback": "ph:device-mobile-camera-fill",
	});
}

export default Component;
