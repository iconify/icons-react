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
		"content": `<style>.pojefpbfh {
  fill: currentColor;
  d: path("M52 192v8a12 12 0 0 1-24 0v-8a12 12 0 0 1 24 0");
}
</style><path class="pojefpbfh"/>`,
		"fallback": "ph:cell-signal-none-bold",
	});
}

export default Component;
