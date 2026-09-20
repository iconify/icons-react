import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.upousxb2y {
  fill: currentColor;
  d: path("M8.499 7.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm.25-2a.749.749 0 1 1-1.499 0a.749.749 0 0 1 1.498 0M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8");
}
</style><path class="upousxb2y"/>`,
		"fallback": "fluent:info-16-regular",
	});
}

export default Component;
