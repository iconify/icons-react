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
		"content": `<style>.yhl0lr-7v {
  fill: currentColor;
  d: path("M12.5 2A1.5 1.5 0 0 1 14 3.5v9a1.5 1.5 0 0 1-3 0v-9A1.5 1.5 0 0 1 12.5 2m-4 3A1.5 1.5 0 0 1 10 6.5v6a1.5 1.5 0 0 1-3 0v-6A1.5 1.5 0 0 1 8.5 5m-4 3A1.5 1.5 0 0 1 6 9.5v3a1.5 1.5 0 0 1-3 0v-3A1.5 1.5 0 0 1 4.5 8");
}
</style><path class="yhl0lr-7v"/>`,
		"fallback": "fluent:data-bar-vertical-ascending-16-filled",
	});
}

export default Component;
