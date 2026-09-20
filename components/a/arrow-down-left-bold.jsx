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
		"content": `<style>.wqhq-jbtf {
  fill: currentColor;
  d: path("M200.49 72.48L93 180h75a12 12 0 0 1 0 24H64a12 12 0 0 1-12-12V88a12 12 0 0 1 24 0v75L183.51 55.51a12 12 0 0 1 17 17Z");
}
</style><path class="wqhq-jbtf"/>`,
		"fallback": "ph:arrow-down-left-bold",
	});
}

export default Component;
