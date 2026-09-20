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
		"content": `<style>.nwfu92byf {
  fill: currentColor;
  d: path("m6.921 12.5l5.793 5.792L12 19l-7-7l7-7l.714.708L6.92 11.5H19v1z");
}
</style><path class="nwfu92byf"/>`,
		"fallback": "material-symbols-light:arrow-back-outline",
	});
}

export default Component;
