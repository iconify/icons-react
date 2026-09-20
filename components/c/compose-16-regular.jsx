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
		"content": `<style>.cl1drrbhj {
  fill: currentColor;
  d: path("M8.5 3a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 0 3 5.5v6A1.5 1.5 0 0 0 4.5 13h6a1.5 1.5 0 0 0 1.5-1.5v-4a.5.5 0 0 1 1 0v4a2.5 2.5 0 0 1-2.5 2.5h-6A2.5 2.5 0 0 1 2 11.5v-6A2.5 2.5 0 0 1 4.5 3zm4.647-.854a.5.5 0 1 1 .707.708L7.06 9.646L6 10l.354-1.06z");
}
</style><path class="cl1drrbhj"/>`,
		"fallback": "fluent:compose-16-regular",
	});
}

export default Component;
