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
		"content": `<style>.s035tib_k {
  fill: currentColor;
  d: path("M124 136V96a4 4 0 0 1 8 0v40a4 4 0 0 1-8 0m4 28a8 8 0 1 0 8 8a8 8 0 0 0-8-8M96 12h64a4 4 0 0 0 0-8H96a4 4 0 0 0 0 8m100 44v168a20 20 0 0 1-20 20H80a20 20 0 0 1-20-20V56a20 20 0 0 1 20-20h96a20 20 0 0 1 20 20m-8 0a12 12 0 0 0-12-12H80a12 12 0 0 0-12 12v168a12 12 0 0 0 12 12h96a12 12 0 0 0 12-12Z");
}
</style><path class="s035tib_k"/>`,
		"fallback": "ph:battery-warning-vertical-thin",
	});
}

export default Component;
