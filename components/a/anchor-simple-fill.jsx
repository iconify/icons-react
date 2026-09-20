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
		"content": `<style>.gkvikvvea {
  fill: currentColor;
  d: path("M232 120a104 104 0 0 1-208 0a8 8 0 0 1 8-8h24a8 8 0 0 1 0 16H40.36A88.15 88.15 0 0 0 120 207.63V90.83a28 28 0 1 1 16 0v116.8A88.15 88.15 0 0 0 215.64 128H200a8 8 0 0 1 0-16h24a8 8 0 0 1 8 8");
}
</style><path class="gkvikvvea"/>`,
		"fallback": "ph:anchor-simple-fill",
	});
}

export default Component;
