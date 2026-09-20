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
		"content": `<style>.p05dmmbbt {
  fill: currentColor;
  d: path("M192 24H64a24 24 0 0 0-24 24v160a24 24 0 0 0 24 24h128a24 24 0 0 0 24-24V48a24 24 0 0 0-24-24m-64 56a12 12 0 1 1 12-12a12 12 0 0 1-12 12");
}
</style><path class="p05dmmbbt"/>`,
		"fallback": "ph:device-tablet-camera-fill",
	});
}

export default Component;
