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
		"content": `<style>.wi98cxe4x {
  fill: currentColor;
  d: path("M51.85 148.74L173.29 104L51.85 59.26a12 12 0 0 1 8.3-22.52l152 56a12 12 0 0 1 0 22.52l-152 56a12 12 0 1 1-8.3-22.52M208 188H56a12 12 0 0 0 0 24h152a12 12 0 0 0 0-24");
}
</style><path class="wi98cxe4x"/>`,
		"fallback": "ph:greater-than-or-equal-bold",
	});
}

export default Component;
