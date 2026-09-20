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
		"content": `<style>.neol7wqiv {
  fill: currentColor;
  d: path("M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m38-70a26 26 0 0 1-26 26h-6v10a6 6 0 0 1-12 0v-10h-18a6 6 0 0 1 0-12h36a14 14 0 0 0 0-28h-24a26 26 0 0 1 0-52h6V72a6 6 0 0 1 12 0v10h18a6 6 0 0 1 0 12h-36a14 14 0 0 0 0 28h24a26 26 0 0 1 26 26");
}
</style><path class="neol7wqiv"/>`,
		"fallback": "ph:currency-circle-dollar-light",
	});
}

export default Component;
