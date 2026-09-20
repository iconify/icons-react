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
		"content": `<style>.qut1iownw {
  fill: currentColor;
  d: path("M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m14-102a10 10 0 1 1-10-10a10 10 0 0 1 10 10m22-14a10 10 0 1 1 10-10a10 10 0 0 1-10 10m18 30a10 10 0 1 1-10-10a10 10 0 0 1 10 10");
}
</style><path class="qut1iownw"/>`,
		"fallback": "ph:bowling-ball-light",
	});
}

export default Component;
