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
		"content": `<style>.r8fxz-3nj {
  fill: currentColor;
  d: path("M48 192v8a8 8 0 0 1-16 0v-8a8 8 0 0 1 16 0");
}
</style><path class="r8fxz-3nj"/>`,
		"fallback": "ph:cell-signal-none",
	});
}

export default Component;
