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
		"content": `<style>.estx28box {
  fill: currentColor;
  d: path("M208 48v160a8 8 0 0 1-13.66 5.66L128 147.31V208a8 8 0 0 1-13.66 5.66l-80-80a8 8 0 0 1 0-11.32l80-80A8 8 0 0 1 128 48v60.69l66.34-66.35A8 8 0 0 1 208 48");
}
</style><path class="estx28box"/>`,
		"fallback": "ph:caret-double-left-fill",
	});
}

export default Component;
