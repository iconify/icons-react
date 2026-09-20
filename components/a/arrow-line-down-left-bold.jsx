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
		"content": `<style>.a-qw5ibrb {
  fill: currentColor;
  d: path("M236 48a12 12 0 0 1-12 12H48a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12m-60.49 39.51L84 179v-67a12 12 0 0 0-24 0v96a12 12 0 0 0 12 12h96a12 12 0 0 0 0-24h-67l91.52-91.51a12 12 0 0 0-17-17Z");
}
</style><path class="a-qw5ibrb"/>`,
		"fallback": "ph:arrow-line-down-left-bold",
	});
}

export default Component;
