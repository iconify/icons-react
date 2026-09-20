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
		"content": `<style>.ru9aqrbts {
  fill: currentColor;
  d: path("M244 192a12 12 0 0 1-12 12H88a12 12 0 0 1-12-12V77l-27.51 27.49a12 12 0 0 1-17-17l48-48a12 12 0 0 1 17 0l48 48a12 12 0 0 1-17 17L100 77v103h132a12 12 0 0 1 12 12");
}
</style><path class="ru9aqrbts"/>`,
		"fallback": "ph:arrow-elbow-left-up-bold",
	});
}

export default Component;
