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
		"content": `<style>.v7vp720wg {
  fill: currentColor;
  d: path("M236 128a12 12 0 0 1-12 12H109l51.52 51.51a12 12 0 0 1-17 17l-72-72a12 12 0 0 1 0-17l72-72a12 12 0 0 1 17 17L109 116h115a12 12 0 0 1 12 12M40 28a12 12 0 0 0-12 12v176a12 12 0 0 0 24 0V40a12 12 0 0 0-12-12");
}
</style><path class="v7vp720wg"/>`,
		"fallback": "ph:arrow-line-left-bold",
	});
}

export default Component;
