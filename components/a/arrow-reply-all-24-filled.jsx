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
		"content": `<style>.jl452_b8g {
  fill: currentColor;
  d: path("M9.707 5.293a1 1 0 0 1 0 1.414L5.414 11l4.293 4.293a1 1 0 0 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414l5-5a1 1 0 0 1 1.414 0m5 0a1 1 0 0 1 0 1.414L11.414 10H13a8 8 0 0 1 8 8a1 1 0 1 1-2 0a6 6 0 0 0-6-6h-1.586l3.293 3.293a1 1 0 0 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414l5-5a1 1 0 0 1 1.414 0");
}
</style><path class="jl452_b8g"/>`,
		"fallback": "fluent:arrow-reply-all-24-filled",
	});
}

export default Component;
