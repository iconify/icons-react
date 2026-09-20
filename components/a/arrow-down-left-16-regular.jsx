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
		"content": `<style>.h9l-xcbwg {
  fill: currentColor;
  d: path("M8.5 13a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 1 0v4.793L13.147 2.146a.5.5 0 1 1 .707.708L3.707 13z");
}
</style><path class="h9l-xcbwg"/>`,
		"fallback": "fluent:arrow-down-left-16-regular",
	});
}

export default Component;
