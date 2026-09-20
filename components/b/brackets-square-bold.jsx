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
		"content": `<style>.a5uymgb2u {
  fill: currentColor;
  d: path("M52 52v152h28a12 12 0 0 1 0 24H40a12 12 0 0 1-12-12V40a12 12 0 0 1 12-12h40a12 12 0 0 1 0 24Zm164-24h-40a12 12 0 0 0 0 24h28v152h-28a12 12 0 0 0 0 24h40a12 12 0 0 0 12-12V40a12 12 0 0 0-12-12");
}
</style><path class="a5uymgb2u"/>`,
		"fallback": "ph:brackets-square-bold",
	});
}

export default Component;
