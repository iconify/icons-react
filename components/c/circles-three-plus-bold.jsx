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
		"content": `<style>.th_jys44n {
  fill: currentColor;
  d: path("M78 36a42 42 0 1 0 42 42a42 42 0 0 0-42-42m0 60a18 18 0 1 1 18-18a18 18 0 0 1-18 18m100 24a42 42 0 1 0-42-42a42 42 0 0 0 42 42m0-60a18 18 0 1 1-18 18a18 18 0 0 1 18-18M78 136a42 42 0 1 0 42 42a42 42 0 0 0-42-42m0 60a18 18 0 1 1 18-18a18 18 0 0 1-18 18m142-18a12 12 0 0 1-12 12h-18v18a12 12 0 0 1-24 0v-18h-18a12 12 0 0 1 0-24h18v-18a12 12 0 0 1 24 0v18h18a12 12 0 0 1 12 12");
}
</style><path class="th_jys44n"/>`,
		"fallback": "ph:circles-three-plus-bold",
	});
}

export default Component;
