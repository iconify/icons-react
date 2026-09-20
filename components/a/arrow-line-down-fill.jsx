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
		"content": `<style>.vnpyeo48y {
  fill: currentColor;
  d: path("M50.34 117.66A8 8 0 0 1 56 104h64V32a8 8 0 0 1 16 0v72h64a8 8 0 0 1 5.66 13.66l-72 72a8 8 0 0 1-11.32 0ZM216 208H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16");
}
</style><path class="vnpyeo48y"/>`,
		"fallback": "ph:arrow-line-down-fill",
	});
}

export default Component;
