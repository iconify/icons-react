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
		"content": `<style>.j3hfnpygb {
  fill: currentColor;
  d: path("M248 124h-68.17a52 52 0 0 0-103.66 0H8a4 4 0 0 0 0 8h68.17a52 52 0 0 0 103.66 0H248a4 4 0 0 0 0-8m-120 48a44 44 0 1 1 44-44a44.05 44.05 0 0 1-44 44");
}
</style><path class="j3hfnpygb"/>`,
		"fallback": "ph:git-commit-thin",
	});
}

export default Component;
