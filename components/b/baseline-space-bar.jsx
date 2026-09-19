import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.klvgiqbuv {
  fill: currentColor;
  d: path("M18 9v4H6V9H4v6h16V9z");
}
</style><path class="klvgiqbuv"/>`,
		"fallback": "ic:baseline-space-bar",
	});
}

export default Component;
