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
		"content": `<style>.cq5gmob6t {
  fill: currentColor;
  d: path("M222 40a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6m-30 58a6 6 0 0 0-6 6v81.52L84.24 83.76a6 6 0 0 0-8.48 8.48L177.52 194H96a6 6 0 0 0 0 12h96a6 6 0 0 0 6-6v-96a6 6 0 0 0-6-6");
}
</style><path class="cq5gmob6t"/>`,
		"fallback": "ph:arrow-line-down-right-light",
	});
}

export default Component;
