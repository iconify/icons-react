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
		"content": `<style>.c411y7f9v {
  fill: currentColor;
  d: path("M201.57 54.42a104 104 0 1 0 0 147.15a104.17 104.17 0 0 0 0-147.15m-75.91 79.24l-32 32a8 8 0 1 1-11.32-11.32L108.68 128l-26.36-26.36a8 8 0 1 1 11.32-11.32l32 32a8 8 0 0 1 .02 11.34m56 0l-32 32a8 8 0 0 1-11.32-11.32L164.71 128l-26.36-26.36a8 8 0 1 1 11.32-11.32l32 32a8 8 0 0 1 .01 11.34Z");
}
</style><path class="c411y7f9v"/>`,
		"fallback": "ph:caret-circle-double-right-fill",
	});
}

export default Component;
