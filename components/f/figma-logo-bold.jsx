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
		"content": `<style>.mqgbklbns {
  fill: currentColor;
  d: path("M198.15 96A44 44 0 0 0 168 20H96a44 44 0 0 0-30.15 76a43.9 43.9 0 0 0 1.23 65.12A48 48 0 1 0 148 196v-28.83A44 44 0 0 0 198.15 96M188 64a20 20 0 0 1-20 20h-20V44h20a20 20 0 0 1 20 20M76 64a20 20 0 0 1 20-20h28v40H96a20 20 0 0 1-20-20m20 84a20 20 0 0 1 0-40h28v40zm28 48a24 24 0 1 1-24-24h24Zm44-48a20 20 0 1 1 20-20a20 20 0 0 1-20 20");
}
</style><path class="mqgbklbns"/>`,
		"fallback": "ph:figma-logo-bold",
	});
}

export default Component;
