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
		"content": `<style>.lth-hsbke {
  fill: currentColor;
  d: path("M200 56H32A24 24 0 0 0 8 80v96a24 24 0 0 0 24 24h168a24 24 0 0 0 24-24V80a24 24 0 0 0-24-24m8 120a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8h168a8 8 0 0 1 8 8Zm-64-80v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0m-40 0v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0m-40 0v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0m192 0v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0");
}
</style><path class="lth-hsbke"/>`,
		"fallback": "ph:battery-high",
	});
}

export default Component;
