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
		"content": `<style>.wn145uyuy {
  fill: currentColor;
  d: path("M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m10-134a10 10 0 1 1-10-10a10 10 0 0 1 10 10m0 44a10 10 0 1 1-10-10a10 10 0 0 1 10 10m0 44a10 10 0 1 1-10-10a10 10 0 0 1 10 10");
}
</style><path class="wn145uyuy"/>`,
		"fallback": "ph:dots-three-circle-vertical-light",
	});
}

export default Component;
