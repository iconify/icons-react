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
		"content": `<style>.vdorbx0ue {
  fill: currentColor;
  d: path("M212 224a12 12 0 0 1-12 12A108.12 108.12 0 0 1 92 128V61L64.49 88.49a12 12 0 0 1-17-17l48-48a12 12 0 0 1 17 0l48 48a12 12 0 0 1-17 17L116 61v67a84.09 84.09 0 0 0 84 84a12 12 0 0 1 12 12");
}
</style><path class="vdorbx0ue"/>`,
		"fallback": "ph:arrow-bend-left-up-bold",
	});
}

export default Component;
