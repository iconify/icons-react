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
		"content": `<style>.xlhbhvbmr {
  fill: currentColor;
  d: path("M192 28H64a36 36 0 0 0-36 36v128a36 36 0 0 0 36 36h128a36 36 0 0 0 36-36V64a36 36 0 0 0-36-36m12 164a12 12 0 0 1-12 12H64a12 12 0 0 1-12-12V64a12 12 0 0 1 12-12h128a12 12 0 0 1 12 12Zm-84-88a16 16 0 1 1-16-16a16 16 0 0 1 16 16m48 48a16 16 0 1 1-16-16a16 16 0 0 1 16 16");
}
</style><path class="xlhbhvbmr"/>`,
		"fallback": "ph:dice-two-bold",
	});
}

export default Component;
