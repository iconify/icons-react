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
		"content": `<style>.f3pxjz9vm {
  fill: currentColor;
  d: path("M56 136a8 8 0 0 1-8 8H24a8 8 0 0 1 0-16h8V64h-8a8 8 0 0 1 0-16h16a8 8 0 0 1 6.78 3.74L80 104.91l33.22-53.15A8 8 0 0 1 120 48h16a8 8 0 0 1 0 16h-8v64h8a8 8 0 0 1 0 16h-24a8 8 0 0 1 0-16V83.89l-25.22 40.35a8 8 0 0 1-13.56 0L48 83.89V128a8 8 0 0 1 8 8m112-24h64a8 8 0 0 0 0-16h-64a8 8 0 0 0 0 16m64 16h-64a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16m0 32H80a8 8 0 0 0 0 16h152a8 8 0 0 0 0-16m0 32H80a8 8 0 0 0 0 16h152a8 8 0 0 0 0-16");
}
</style><path class="f3pxjz9vm"/>`,
		"fallback": "ph:article-medium",
	});
}

export default Component;
