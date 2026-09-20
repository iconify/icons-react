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
		"content": `<style>.qszb1-o-a {
  fill: currentColor;
  d: path("M200 56H32A24 24 0 0 0 8 80v96a24 24 0 0 0 24 24h168a24 24 0 0 0 24-24V80a24 24 0 0 0-24-24m8 120a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8h168a8 8 0 0 1 8 8Zm-16-80v64a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V96a8 8 0 0 1 8-8h136a8 8 0 0 1 8 8m64 0v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0");
}
</style><path class="qszb1-o-a"/>`,
		"fallback": "ph:battery-full-fill",
	});
}

export default Component;
