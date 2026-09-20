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
		"content": `<style>.jtny9nifx {
  fill: currentColor;
  d: path("M168 224a8 8 0 0 1-8 8H96a8 8 0 1 1 0-16h64a8 8 0 0 1 8 8m53.81-48.06C216.25 166.38 208 139.33 208 104a80 80 0 1 0-160 0c0 35.34-8.26 62.38-13.81 71.94A16 16 0 0 0 48 200h160a16 16 0 0 0 13.8-24.06Z");
}
</style><path class="jtny9nifx"/>`,
		"fallback": "ph:bell-simple-fill",
	});
}

export default Component;
