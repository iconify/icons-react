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
		"content": `<style>.uqaugj20m {
  fill: currentColor;
  d: path("M128 116a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44m0 80a36 36 0 1 1 36-36a36 36 0 0 1-36 36m79.22-64l-29.79-84.2A52 52 0 0 0 79 46.66l-29.55 83.51A84 84 0 1 0 207.22 132M128 236a76.06 76.06 0 0 1-71-103.08l29.5-83.59a44 44 0 0 1 83.35 1.05l29.82 84.28A76 76 0 0 1 128 236");
}
</style><path class="uqaugj20m"/>`,
		"fallback": "ph:avocado-thin",
	});
}

export default Component;
