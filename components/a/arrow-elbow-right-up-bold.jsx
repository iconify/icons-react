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
		"content": `<style>.szxkvyboz {
  fill: currentColor;
  d: path("M224.49 104.49a12 12 0 0 1-17 0L180 77v115a12 12 0 0 1-12 12H24a12 12 0 0 1 0-24h132V77l-27.51 27.52a12 12 0 1 1-17-17l48-48a12 12 0 0 1 17 0l48 48a12 12 0 0 1 0 16.97");
}
</style><path class="szxkvyboz"/>`,
		"fallback": "ph:arrow-elbow-right-up-bold",
	});
}

export default Component;
