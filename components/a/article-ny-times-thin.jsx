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
		"content": `<style>.f4aoqrhno {
  fill: currentColor;
  d: path("M128 100h104a4 4 0 0 1 0 8H128a4 4 0 0 1 0-8m104 32H128a4 4 0 0 0 0 8h104a4 4 0 0 0 0-8m0 32H80a4 4 0 0 0 0 8h152a4 4 0 0 0 0-8m0 32H80a4 4 0 0 0 0 8h152a4 4 0 0 0 0-8M96 140a4 4 0 0 0 0-8H84V60h40v12a4 4 0 0 0 8 0V56a4 4 0 0 0-4-4H32a4 4 0 0 0-4 4v16a4 4 0 0 0 8 0V60h40v72H64a4 4 0 0 0 0 8Z");
}
</style><path class="f4aoqrhno"/>`,
		"fallback": "ph:article-ny-times-thin",
	});
}

export default Component;
