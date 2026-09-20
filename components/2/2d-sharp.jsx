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
		"content": `<style>.g7nj61b-x {
  fill: currentColor;
  d: path("M6.5 15H11v-1.5H8v-1h3V9H6.5v1.5h3v1h-3zM3 21V3h18v18zm10-6h4.25l.75-.75v-4.5L17.25 9H13zm1.5-1.5v-3h2v3z");
}
</style><path class="g7nj61b-x"/>`,
		"fallback": "material-symbols:2d-sharp",
	});
}

export default Component;
