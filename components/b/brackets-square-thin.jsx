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
		"content": `<style>.ygqano31y {
  fill: currentColor;
  d: path("M44 44v168h36a4 4 0 0 1 0 8H40a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h40a4 4 0 0 1 0 8Zm172-8h-40a4 4 0 0 0 0 8h36v168h-36a4 4 0 0 0 0 8h40a4 4 0 0 0 4-4V40a4 4 0 0 0-4-4");
}
</style><path class="ygqano31y"/>`,
		"fallback": "ph:brackets-square-thin",
	});
}

export default Component;
