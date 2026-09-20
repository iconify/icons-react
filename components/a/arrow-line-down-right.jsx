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
		"content": `<style>.re89_e8ys {
  fill: currentColor;
  d: path("M224 40a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8m-32 56a8 8 0 0 0-8 8v76.69L85.66 82.34a8 8 0 0 0-11.32 11.32L172.69 192H96a8 8 0 0 0 0 16h96a8 8 0 0 0 8-8v-96a8 8 0 0 0-8-8");
}
</style><path class="re89_e8ys"/>`,
		"fallback": "ph:arrow-line-down-right",
	});
}

export default Component;
