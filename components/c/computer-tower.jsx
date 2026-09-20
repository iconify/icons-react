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
		"content": `<style>.i0lc9-ccg {
  fill: currentColor;
  d: path("M88 72a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m8 40h64a8 8 0 0 0 0-16H96a8 8 0 0 0 0 16m112-72v176a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h128a16 16 0 0 1 16 16m-16 0H64v176h128Zm-64 128a12 12 0 1 0 12 12a12 12 0 0 0-12-12");
}
</style><path class="i0lc9-ccg"/>`,
		"fallback": "ph:computer-tower",
	});
}

export default Component;
