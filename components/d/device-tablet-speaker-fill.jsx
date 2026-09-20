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
		"content": `<style>.ig18_j3qq {
  fill: currentColor;
  d: path("M192 24H64a24 24 0 0 0-24 24v160a24 24 0 0 0 24 24h128a24 24 0 0 0 24-24V48a24 24 0 0 0-24-24m-32 48H96a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16");
}
</style><path class="ig18_j3qq"/>`,
		"fallback": "ph:device-tablet-speaker-fill",
	});
}

export default Component;
