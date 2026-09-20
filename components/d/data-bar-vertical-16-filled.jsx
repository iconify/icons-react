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
		"content": `<style>.ty_zuvenm {
  fill: currentColor;
  d: path("M3.5 2A1.5 1.5 0 0 0 2 3.5v9a1.5 1.5 0 0 0 3 0v-9A1.5 1.5 0 0 0 3.5 2m4 3A1.5 1.5 0 0 0 6 6.5v6a1.5 1.5 0 0 0 3 0v-6A1.5 1.5 0 0 0 7.5 5m4 3A1.5 1.5 0 0 0 10 9.5v3a1.5 1.5 0 0 0 3 0v-3A1.5 1.5 0 0 0 11.5 8");
}
</style><path class="ty_zuvenm"/>`,
		"fallback": "fluent:data-bar-vertical-16-filled",
	});
}

export default Component;
