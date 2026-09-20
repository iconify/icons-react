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
		"content": `<style>.qhvje3e5g {
  fill: currentColor;
  d: path("M228 128a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12M128 84a20 20 0 1 0-20-20a20 20 0 0 0 20 20m0 88a20 20 0 1 0 20 20a20 20 0 0 0-20-20");
}
</style><path class="qhvje3e5g"/>`,
		"fallback": "ph:divide-bold",
	});
}

export default Component;
