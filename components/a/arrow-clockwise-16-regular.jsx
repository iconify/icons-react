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
		"content": `<style>.ujmo2hbmc {
  fill: currentColor;
  d: path("M3 8a5 5 0 0 1 9-3h-2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-1 0v1.531a6 6 0 1 0 1.476 4.513a.5.5 0 0 0-.996-.089A5 5 0 0 1 3 8");
}
</style><path class="ujmo2hbmc"/>`,
		"fallback": "fluent:arrow-clockwise-16-regular",
	});
}

export default Component;
