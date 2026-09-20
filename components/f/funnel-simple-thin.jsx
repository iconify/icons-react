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
		"content": `<style>.mn3p6wbzw {
  fill: currentColor;
  d: path("M196 136a4 4 0 0 1-4 4H64a4 4 0 0 1 0-8h128a4 4 0 0 1 4 4m36-52H24a4 4 0 0 0 0 8h208a4 4 0 0 0 0-8m-80 96h-48a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8");
}
</style><path class="mn3p6wbzw"/>`,
		"fallback": "ph:funnel-simple-thin",
	});
}

export default Component;
