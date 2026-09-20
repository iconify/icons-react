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
		"content": `<style>.c469j9e5u {
  fill: currentColor;
  d: path("M56 132a12 12 0 0 1-12 12H24a12 12 0 0 1 0-24h4V68h-4a12 12 0 0 1 0-24h16a12 12 0 0 1 10 5.33l30 45l30-45A12 12 0 0 1 120 44h16a12 12 0 0 1 0 24h-4v52h4a12 12 0 0 1 0 24h-20a12 12 0 0 1-8-20.93V95.63l-18 27a12 12 0 0 1-20 0l-18-27v27.44a12 12 0 0 1 4 8.93m120-28h56a12 12 0 0 0 0-24h-56a12 12 0 0 0 0 24m56 16h-56a12 12 0 0 0 0 24h56a12 12 0 0 0 0-24m0 40H80a12 12 0 0 0 0 24h152a12 12 0 0 0 0-24m0 40H80a12 12 0 0 0 0 24h152a12 12 0 0 0 0-24");
}
</style><path class="c469j9e5u"/>`,
		"fallback": "ph:article-medium-bold",
	});
}

export default Component;
