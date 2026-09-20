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
		"content": `<style>.r9_t79buq {
  fill: currentColor;
  d: path("M149.1 132.85a6 6 0 0 1 .27 5.83l-16 32a6 6 0 1 1-10.74-5.36L134.29 142H112a6 6 0 0 1-5.37-8.68l16-32a6 6 0 0 1 10.74 5.36L121.71 130H144a6 6 0 0 1 5.1 2.85M96 14h64a6 6 0 0 0 0-12H96a6 6 0 0 0 0 12m102 42v168a22 22 0 0 1-22 22H80a22 22 0 0 1-22-22V56a22 22 0 0 1 22-22h96a22 22 0 0 1 22 22m-12 0a10 10 0 0 0-10-10H80a10 10 0 0 0-10 10v168a10 10 0 0 0 10 10h96a10 10 0 0 0 10-10Z");
}
</style><path class="r9_t79buq"/>`,
		"fallback": "ph:battery-charging-vertical-light",
	});
}

export default Component;
