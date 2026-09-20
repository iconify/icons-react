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
		"content": `<style>.ap-29ub_u {
  fill: currentColor;
  d: path("m205.66 181.66l-48 48a8 8 0 0 1-11.32 0l-48-48A8 8 0 0 1 104 168h40v-40a88.1 88.1 0 0 0-88-88a8 8 0 0 1 0-16a104.11 104.11 0 0 1 104 104v40h40a8 8 0 0 1 5.66 13.66");
}
</style><path class="ap-29ub_u"/>`,
		"fallback": "ph:arrow-bend-right-down-fill",
	});
}

export default Component;
