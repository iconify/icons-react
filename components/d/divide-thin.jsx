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
		"content": `<style>.w7n88fbbm {
  fill: currentColor;
  d: path("M220 128a4 4 0 0 1-4 4H40a4 4 0 0 1 0-8h176a4 4 0 0 1 4 4m-92-52a12 12 0 1 0-12-12a12 12 0 0 0 12 12m0 104a12 12 0 1 0 12 12a12 12 0 0 0-12-12");
}
</style><path class="w7n88fbbm"/>`,
		"fallback": "ph:divide-thin",
	});
}

export default Component;
