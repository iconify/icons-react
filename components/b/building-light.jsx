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
		"content": `<style>.sw6wcub9m {
  fill: currentColor;
  d: path("M232 226h-26V30h10a6 6 0 0 0 0-12H40a6 6 0 0 0 0 12h10v196H24a6 6 0 0 0 0 12h208a6 6 0 0 0 0-12M62 30h132v196h-36v-42a6 6 0 0 0-6-6h-48a6 6 0 0 0-6 6v42H62Zm84 196h-36v-36h36ZM90 64a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12H96a6 6 0 0 1-6-6m48 0a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12h-16a6 6 0 0 1-6-6m-48 40a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12H96a6 6 0 0 1-6-6m48 0a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12h-16a6 6 0 0 1-6-6m-42 46a6 6 0 0 1 0-12h16a6 6 0 0 1 0 12Zm42-6a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12h-16a6 6 0 0 1-6-6");
}
</style><path class="sw6wcub9m"/>`,
		"fallback": "ph:building-light",
	});
}

export default Component;
