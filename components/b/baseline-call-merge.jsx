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
		"content": `<style>.lebgayb6s {
  fill: currentColor;
  d: path("M17 20.41L18.41 19L15 15.59L13.59 17zM7.5 8H11v5.59L5.59 19L7 20.41l6-6V8h3.5L12 3.5z");
}
</style><path class="lebgayb6s"/>`,
		"fallback": "ic:baseline-call-merge",
	});
}

export default Component;
