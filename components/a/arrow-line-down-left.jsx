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
		"content": `<style>.m8s5b_bfu {
  fill: currentColor;
  d: path("M232 48a8 8 0 0 1-8 8H48a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8m-53.66 42.34L80 188.69V112a8 8 0 0 0-16 0v96a8 8 0 0 0 8 8h96a8 8 0 0 0 0-16H91.31l98.35-98.34a8 8 0 0 0-11.32-11.32");
}
</style><path class="m8s5b_bfu"/>`,
		"fallback": "ph:arrow-line-down-left",
	});
}

export default Component;
