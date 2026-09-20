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
		"content": `<style>.j__ughc_v {
  fill: currentColor;
  d: path("M242.15 49.59A12 12 0 0 0 232 44H40a12 12 0 0 0-8.48 20.49L71 104l-39.48 39.51A12 12 0 0 0 40 164h127.28l-26.11 54.84a12 12 0 1 0 21.66 10.32l80-168a12 12 0 0 0-.68-11.57M178.71 140H69l27.52-27.52a12 12 0 0 0 0-17L69 68h144Z");
}
</style><path class="j__ughc_v"/>`,
		"fallback": "ph:flag-banner-bold",
	});
}

export default Component;
