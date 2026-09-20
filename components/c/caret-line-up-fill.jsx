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
		"content": `<style>.v3metlb-l {
  fill: currentColor;
  d: path("M213.66 186.34A8 8 0 0 1 208 200H48a8 8 0 0 1-5.66-13.66l80-80a8 8 0 0 1 11.32 0ZM48 80h160a8 8 0 0 0 0-16H48a8 8 0 0 0 0 16");
}
</style><path class="v3metlb-l"/>`,
		"fallback": "ph:caret-line-up-fill",
	});
}

export default Component;
