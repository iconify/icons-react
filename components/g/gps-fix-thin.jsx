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
		"content": `<style>.qco37pbvz {
  fill: currentColor;
  d: path("M240 124h-28.1A84.11 84.11 0 0 0 132 44.1V16a4 4 0 0 0-8 0v28.1A84.11 84.11 0 0 0 44.1 124H16a4 4 0 0 0 0 8h28.1a84.11 84.11 0 0 0 79.9 79.9V240a4 4 0 0 0 8 0v-28.1a84.11 84.11 0 0 0 79.9-79.9H240a4 4 0 0 0 0-8m-112 80a76 76 0 1 1 76-76a76.08 76.08 0 0 1-76 76m0-112a36 36 0 1 0 36 36a36 36 0 0 0-36-36m0 64a28 28 0 1 1 28-28a28 28 0 0 1-28 28");
}
</style><path class="qco37pbvz"/>`,
		"fallback": "ph:gps-fix-thin",
	});
}

export default Component;
