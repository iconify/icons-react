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
		"content": `<style>.p4bfbbxqw {
  fill: currentColor;
  d: path("M232 212h-36.2a107.94 107.94 0 1 0-67.8 24h104a12 12 0 0 0 0-24M44 128a84 84 0 1 1 84 84a84.09 84.09 0 0 1-84-84m64-44a20 20 0 1 1 20 20a20 20 0 0 1-20-20m20 108a20 20 0 1 1 20-20a20 20 0 0 1-20 20m24-64a20 20 0 1 1 20 20a20 20 0 0 1-20-20m-48 0a20 20 0 1 1-20-20a20 20 0 0 1 20 20");
}
</style><path class="p4bfbbxqw"/>`,
		"fallback": "ph:film-reel-bold",
	});
}

export default Component;
