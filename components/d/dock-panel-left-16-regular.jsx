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
		"content": `<style>.ilbk15b5z {
  fill: currentColor;
  d: path("M2 5.5A2.5 2.5 0 0 1 4.5 3h7A2.5 2.5 0 0 1 14 5.5v5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 10.5zM7 4v8h4.5a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 4zM6 4H4.5A1.5 1.5 0 0 0 3 5.5v5A1.5 1.5 0 0 0 4.5 12H6z");
}
</style><path class="ilbk15b5z"/>`,
		"fallback": "fluent:dock-panel-left-16-regular",
	});
}

export default Component;
