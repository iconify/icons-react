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
		"content": `<style>.ip4pqxzrr {
  fill: currentColor;
  d: path("M228 40a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12m-36 52a12 12 0 0 0-12 12v67L88.49 79.51a12 12 0 0 0-17 17L163 188H96a12 12 0 0 0 0 24h96a12 12 0 0 0 12-12v-96a12 12 0 0 0-12-12");
}
</style><path class="ip4pqxzrr"/>`,
		"fallback": "ph:arrow-line-down-right-bold",
	});
}

export default Component;
