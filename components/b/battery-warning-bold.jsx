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
		"content": `<style>.r_49v08oj {
  fill: currentColor;
  d: path("M196 52H28A28 28 0 0 0 0 80v96a28 28 0 0 0 28 28h168a28 28 0 0 0 28-28V80a28 28 0 0 0-28-28m4 124a4 4 0 0 1-4 4H28a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4h168a4 4 0 0 1 4 4Zm56-72v48a12 12 0 0 1-24 0v-48a12 12 0 0 1 24 0m-156 12v-16a12 12 0 0 1 24 0v16a12 12 0 0 1-24 0m28 36a16 16 0 1 1-16-16a16 16 0 0 1 16 16");
}
</style><path class="r_49v08oj"/>`,
		"fallback": "ph:battery-warning-bold",
	});
}

export default Component;
