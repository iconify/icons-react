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
		"content": `<style>.d35gxvbjc {
  fill: currentColor;
  d: path("m216.88 207.93l-160-176a12 12 0 1 0-17.76 16.14L52 62.24V216a28 28 0 0 0 28 28h96a28 28 0 0 0 26-17.61a12 12 0 0 0 14.88-18.46M176 220H80a4 4 0 0 1-4-4V88.64L180 203v13a4 4 0 0 1-4 4M75.51 24a12 12 0 0 1 12-12H176a28 28 0 0 1 28 28v98.94a12 12 0 0 1-24 0V40a4 4 0 0 0-4-4H87.51a12 12 0 0 1-12-12");
}
</style><path class="d35gxvbjc"/>`,
		"fallback": "ph:device-mobile-slash-bold",
	});
}

export default Component;
