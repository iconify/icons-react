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
		"content": `<style>.bk2rnbb-o {
  fill: currentColor;
  d: path("M196 52H28A28 28 0 0 0 0 80v96a28 28 0 0 0 28 28h168a28 28 0 0 0 28-28V80a28 28 0 0 0-28-28m4 124a4 4 0 0 1-4 4H28a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4h168a4 4 0 0 1 4 4Zm-96-72v48a12 12 0 0 1-24 0v-48a12 12 0 0 1 24 0m-40 0v48a12 12 0 0 1-24 0v-48a12 12 0 0 1 24 0m192 0v48a12 12 0 0 1-24 0v-48a12 12 0 0 1 24 0");
}
</style><path class="bk2rnbb-o"/>`,
		"fallback": "ph:battery-medium-bold",
	});
}

export default Component;
