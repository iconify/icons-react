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
		"content": `<style>.zno6h4n8l {
  fill: currentColor;
  d: path("M240 96h-24a8 8 0 0 0-8-8h-72a8 8 0 0 0-8 8H64V52a12 12 0 0 1 12-12a12.44 12.44 0 0 1 12.16 9.59a8 8 0 0 0 15.68-3.18A28.32 28.32 0 0 0 76 24a28 28 0 0 0-28 28v44H16a8 8 0 0 0-8 8v40a56.06 56.06 0 0 0 56 56v16a8 8 0 0 0 16 0v-16h96v16a8 8 0 0 0 16 0v-16a56.06 56.06 0 0 0 56-56v-40a8 8 0 0 0-8-8m-40 8v40h-56v-40Z");
}
</style><path class="zno6h4n8l"/>`,
		"fallback": "ph:bathtub-fill",
	});
}

export default Component;
