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
		"content": `<style>.hq-kihbwj {
  fill: currentColor;
  d: path("M192 20H64a28 28 0 0 0-28 28v160a28 28 0 0 0 28 28h128a28 28 0 0 0 28-28V48a28 28 0 0 0-28-28m4 188a4 4 0 0 1-4 4H64a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h128a4 4 0 0 1 4 4ZM144 76a16 16 0 1 1-16-16a16 16 0 0 1 16 16");
}
</style><path class="hq-kihbwj"/>`,
		"fallback": "ph:device-tablet-camera-bold",
	});
}

export default Component;
