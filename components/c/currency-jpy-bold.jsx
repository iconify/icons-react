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
		"content": `<style>.fvk2lqb5e {
  fill: currentColor;
  d: path("m209.29 55.6l-56 68.4H176a12 12 0 0 1 0 24h-36v16h36a12 12 0 0 1 0 24h-36v28a12 12 0 0 1-24 0v-28H80a12 12 0 0 1 0-24h36v-16H80a12 12 0 0 1 0-24h22.68l-56-68.4a12 12 0 1 1 18.61-15.2L128 117.05l62.71-76.65a12 12 0 1 1 18.58 15.2");
}
</style><path class="fvk2lqb5e"/>`,
		"fallback": "ph:currency-jpy-bold",
	});
}

export default Component;
