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
		"content": `<style>.lqwllcbet {
  fill: currentColor;
  d: path("M156 92a12 12 0 0 1 12-12h64a12 12 0 0 1 0 24h-64a12 12 0 0 1-12-12m76 28h-64a12 12 0 0 0 0 24h64a12 12 0 0 0 0-24m0 40H80a12 12 0 0 0 0 24h152a12 12 0 0 0 0-24m0 40H80a12 12 0 0 0 0 24h152a12 12 0 0 0 0-24M96 144a12 12 0 0 0 0-24h-4V68h24v4a12 12 0 0 0 24 0V56a12 12 0 0 0-12-12H32a12 12 0 0 0-12 12v16a12 12 0 0 0 24 0v-4h24v52h-4a12 12 0 0 0 0 24Z");
}
</style><path class="lqwllcbet"/>`,
		"fallback": "ph:article-ny-times-bold",
	});
}

export default Component;
