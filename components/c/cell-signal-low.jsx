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
		"content": `<style>.cnlk927ir {
  fill: currentColor;
  d: path("M88 152v48a8 8 0 0 1-16 0v-48a8 8 0 0 1 16 0m-48 32a8 8 0 0 0-8 8v8a8 8 0 0 0 16 0v-8a8 8 0 0 0-8-8");
}
</style><path class="cnlk927ir"/>`,
		"fallback": "ph:cell-signal-low",
	});
}

export default Component;
