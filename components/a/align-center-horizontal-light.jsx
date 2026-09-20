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
		"content": `<style>.nop9febvo {
  fill: currentColor;
  d: path("M208 138h-74v-20h50a14 14 0 0 0 14-14V64a14 14 0 0 0-14-14h-50V32a6 6 0 0 0-12 0v18H72a14 14 0 0 0-14 14v40a14 14 0 0 0 14 14h50v20H48a14 14 0 0 0-14 14v40a14 14 0 0 0 14 14h74v18a6 6 0 0 0 12 0v-18h74a14 14 0 0 0 14-14v-40a14 14 0 0 0-14-14M70 104V64a2 2 0 0 1 2-2h112a2 2 0 0 1 2 2v40a2 2 0 0 1-2 2H72a2 2 0 0 1-2-2m140 88a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2v-40a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Z");
}
</style><path class="nop9febvo"/>`,
		"fallback": "ph:align-center-horizontal-light",
	});
}

export default Component;
