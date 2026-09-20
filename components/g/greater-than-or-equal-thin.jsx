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
		"content": `<style>.ywu7o_bag {
  fill: currentColor;
  d: path("M54.62 156.25L196.43 104L54.62 51.75a4 4 0 0 1 2.76-7.5l152 56a4 4 0 0 1 0 7.5l-152 56A3.9 3.9 0 0 1 56 164a4 4 0 0 1-1.38-7.75M208 196H56a4 4 0 0 0 0 8h152a4 4 0 0 0 0-8");
}
</style><path class="ywu7o_bag"/>`,
		"fallback": "ph:greater-than-or-equal-thin",
	});
}

export default Component;
