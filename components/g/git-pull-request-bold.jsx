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
		"content": `<style>.w4cg07b1n {
  fill: currentColor;
  d: path("M108 64a36 36 0 1 0-48 33.94v60.12a36 36 0 1 0 24 0V97.94A36.07 36.07 0 0 0 108 64M72 52a12 12 0 1 1-12 12a12 12 0 0 1 12-12m0 152a12 12 0 1 1 12-12a12 12 0 0 1-12 12m140-45.94v-47.43a27.8 27.8 0 0 0-8.2-19.8L173 60h19a12 12 0 0 0 0-24h-48a12 12 0 0 0-12 12v48a12 12 0 0 0 24 0V77l30.83 30.83a4 4 0 0 1 1.17 2.83v47.43a36 36 0 1 0 24 0ZM200 204a12 12 0 1 1 12-12a12 12 0 0 1-12 12");
}
</style><path class="w4cg07b1n"/>`,
		"fallback": "ph:git-pull-request-bold",
	});
}

export default Component;
