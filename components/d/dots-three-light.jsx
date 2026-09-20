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
		"content": `<style>.lsew7yj0k {
  fill: currentColor;
  d: path("M138 128a10 10 0 1 1-10-10a10 10 0 0 1 10 10m-78-10a10 10 0 1 0 10 10a10 10 0 0 0-10-10m136 0a10 10 0 1 0 10 10a10 10 0 0 0-10-10");
}
</style><path class="lsew7yj0k"/>`,
		"fallback": "ph:dots-three-light",
	});
}

export default Component;
