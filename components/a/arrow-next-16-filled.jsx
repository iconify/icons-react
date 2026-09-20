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
		"content": `<style>.knqhrbubw {
  fill: currentColor;
  d: path("M3.704 11.736a.75.75 0 1 0 1.092 1.028l4-4.25a.75.75 0 0 0 0-1.027l-4-4.25a.75.75 0 1 0-1.092 1.028L7.22 8zM11.25 3a.75.75 0 0 1 .75.75v8.5a.75.75 0 0 1-1.5 0v-8.5a.75.75 0 0 1 .75-.75");
}
</style><path class="knqhrbubw"/>`,
		"fallback": "fluent:arrow-next-16-filled",
	});
}

export default Component;
