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
		"content": `<style>.vu-t6gbgi {
  fill: currentColor;
  d: path("M200 58H32a22 22 0 0 0-22 22v96a22 22 0 0 0 22 22h168a22 22 0 0 0 22-22V80a22 22 0 0 0-22-22m10 118a10 10 0 0 1-10 10H32a10 10 0 0 1-10-10V80a10 10 0 0 1 10-10h168a10 10 0 0 1 10 10Zm44-80v64a6 6 0 0 1-12 0V96a6 6 0 0 1 12 0m-116.9 28.85a6 6 0 0 1 .27 5.83l-16 32a6 6 0 1 1-10.74-5.36L122.29 134H100a6 6 0 0 1-5.37-8.68l16-32a6 6 0 0 1 10.74 5.36L109.71 122H132a6 6 0 0 1 5.1 2.85");
}
</style><path class="vu-t6gbgi"/>`,
		"fallback": "ph:battery-charging-light",
	});
}

export default Component;
