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
		"content": `<style>.nxjizr6so {
  fill: currentColor;
  d: path("M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m34.83-126.83a4 4 0 0 1 0 5.66L105.66 156H144a4 4 0 0 1 0 8H96a4 4 0 0 1-4-4v-48a4 4 0 0 1 8 0v38.34l57.17-57.17a4 4 0 0 1 5.66 0");
}
</style><path class="nxjizr6so"/>`,
		"fallback": "ph:arrow-circle-down-left-thin",
	});
}

export default Component;
