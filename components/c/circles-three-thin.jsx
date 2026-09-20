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
		"content": `<style>.do9e5lbaw {
  fill: currentColor;
  d: path("M168 76a40 40 0 1 0-40 40a40 40 0 0 0 40-40m-40 32a32 32 0 1 1 32-32a32 32 0 0 1-32 32m60 24a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 72a32 32 0 1 1 32-32a32 32 0 0 1-32 32M68 132a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 72a32 32 0 1 1 32-32a32 32 0 0 1-32 32");
}
</style><path class="do9e5lbaw"/>`,
		"fallback": "ph:circles-three-thin",
	});
}

export default Component;
