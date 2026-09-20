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
		"content": `<style>.g5035q1_l {
  fill: currentColor;
  d: path("M228 56v144a4 4 0 0 1-8 0V56a4 4 0 0 1 8 0m-32 40v64a12 12 0 0 1-12 12H32a12 12 0 0 1-12-12V96a12 12 0 0 1 12-12h152a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4H32a4 4 0 0 0-4 4v64a4 4 0 0 0 4 4h152a4 4 0 0 0 4-4Z");
}
</style><path class="g5035q1_l"/>`,
		"fallback": "ph:align-right-simple-thin",
	});
}

export default Component;
