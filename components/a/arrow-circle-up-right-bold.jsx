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
		"content": `<style>.ix0i-byhh {
  fill: currentColor;
  d: path("M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m44-116v48a12 12 0 0 1-24 0v-19l-43.51 43.52a12 12 0 0 1-17-17L131 108h-19a12 12 0 0 1 0-24h48a12 12 0 0 1 12 12");
}
</style><path class="ix0i-byhh"/>`,
		"fallback": "ph:arrow-circle-up-right-bold",
	});
}

export default Component;
