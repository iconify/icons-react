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
		"content": `<style>.p86-22b_l {
  fill: currentColor;
  d: path("M220 160a4 4 0 0 1-4 4H40a4 4 0 0 1 0-8h176a4 4 0 0 1 4 4M40 100h176a4 4 0 0 0 0-8H40a4 4 0 0 0 0 8");
}
</style><path class="p86-22b_l"/>`,
		"fallback": "ph:equals-thin",
	});
}

export default Component;
