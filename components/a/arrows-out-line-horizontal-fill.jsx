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
		"content": `<style>.buc8zubnu {
  fill: currentColor;
  d: path("M104 128a8 8 0 0 1-8 8H56v24a8 8 0 0 1-13.66 5.66l-32-32a8 8 0 0 1 0-11.32l32-32A8 8 0 0 1 56 96v24h40a8 8 0 0 1 8 8m141.66-5.66l-32-32A8 8 0 0 0 200 96v24h-40a8 8 0 0 0 0 16h40v24a8 8 0 0 0 13.66 5.66l32-32a8 8 0 0 0 0-11.32M128 32a8 8 0 0 0-8 8v176a8 8 0 0 0 16 0V40a8 8 0 0 0-8-8");
}
</style><path class="buc8zubnu"/>`,
		"fallback": "ph:arrows-out-line-horizontal-fill",
	});
}

export default Component;
